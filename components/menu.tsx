'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BiSolidHomeAlt2 } from 'react-icons/bi'
import { FiArrowUpRight } from 'react-icons/fi'
import { FaTwitter, FaGithub } from 'react-icons/fa'
import { BsLaptopFill } from 'react-icons/bs'
import { HiLightBulb, HiOutlineNewspaper } from 'react-icons/hi'

const MENU = [
  {
    title: '',
    data: [
      {
        title: 'Home',
        link: '/',
        icon: <BiSolidHomeAlt2 size={16} />,
        hasArrow: false,
      },
    ],
  },
  {
    title: 'Me',
    data: [
      {
        title: 'Learning',
        link: '/learning',
        icon: <HiLightBulb size={16} />,
        hasArrow: false,
      },
      {
        title: 'Writing',
        link: '/writing',
        icon: <HiOutlineNewspaper size={16} />,
        hasArrow: false,
      },
      {
        title: 'Projects',
        link: '/projects',
        icon: <BsLaptopFill size={16} />,
        hasArrow: false,
      },
    ],
  },
  {
    title: 'Follow me on...',
    data: [
      {
        title: 'X',
        link: 'https://twitter.com/andresdo_santos',
        icon: <FaTwitter size={16} />,
        hasArrow: true,
      },
      {
        title: 'Github',
        link: 'https://github.com/AndresdoSantos',
        icon: <FaGithub size={18} />,
        hasArrow: true,
      },
    ],
  },
]

export function Menu() {
  const pathname = usePathname()

  return (
    <aside
      data-open={pathname === '/'}
      className="fixed top-0 w-full sm:w-[15rem] min-h-screen data-[open=false]:hidden data-[open=true]:flex sm:data-[open=false]:flex sm:data-[open=true]:flex flex-col justify-between h-auto bg-[#171717] overflow-hidden"
    >
      <div className="flex flex-col">
        <header className="flex items-center justify-start h-12 px-5">
          <h2 className="text-sm font-bold line-clamp-1 text-white">
            <span className="font-medium text-zinc-400">{`I'm`}</span> Andres
          </h2>
        </header>

        <ul className="px-2.5">
          {MENU.map((menu) => (
            <li key={menu.title}>
              <p className="block mb-2.5 mt-5 text-xs text-zinc-400 px-2.5 font-medium">
                {menu.title}
              </p>

              <ul>
                {menu.data.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.link}
                      target={item.hasArrow ? '__blank' : '_self'}
                      className="group data-[same-pathname=true]:bg-zinc-700/50 data-[same-pathname=false]:hover:bg-zinc-800/50 flex items-center text-[13px] text-white font-medium h-8 px-2.5 rounded-md cursor-pointer mb-2"
                      data-same-pathname={
                        `${item.link}` === `/${pathname.split('/')[1]}`
                      }
                    >
                      {item.icon ? (
                        <div className="mr-5">{item.icon}</div>
                      ) : null}
                      {item.title}

                      {item.hasArrow ? (
                        <FiArrowUpRight size={14} className="ml-auto" />
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      {/** <footer className="px-2.5 pb-5">
            <SignIn />
          </footer> */}
    </aside>
  )
}

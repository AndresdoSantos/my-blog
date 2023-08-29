'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoBook } from 'react-icons/io5'
import { BiSolidHomeAlt2 } from 'react-icons/bi'
import { FiArrowUpRight } from 'react-icons/fi'
import { FaTwitter, FaGithub } from 'react-icons/fa'
import { BsLaptopFill } from 'react-icons/bs'
import { HiLightBulb } from 'react-icons/hi'

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
        icon: <IoBook size={16} />,
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
        link: '/twitter.com',
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
    <ul className="px-2.5">
      {MENU.map((menu) => (
        <li key={menu.title}>
          <p className="block mb-2.5 mt-5 text-xs text-zinc-400 px-2.5 font-medium">
            {menu.title}
          </p>

          <ul>
            {menu.data.map((item) => (
              <Link key={item.title} href={item.link}>
                <li
                  data-same-pathname={
                    `${item.link}` === `/${pathname.split('/')[1]}`
                  }
                  className="group data-[same-pathname=true]:bg-zinc-700/50 data-[same-pathname=false]:hover:bg-zinc-800/50 flex items-center text-[13px] text-white font-medium h-8 px-2.5 rounded-md cursor-pointer mb-2"
                >
                  {item.icon ? <div className="mr-5">{item.icon}</div> : null}
                  {item.title}

                  {item.hasArrow ? (
                    <FiArrowUpRight size={14} className="ml-auto" />
                  ) : null}
                </li>
              </Link>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}

'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import { FaSadCry } from 'react-icons/fa'
import { BsGoogle } from 'react-icons/bs'
import { PiGearDuotone } from 'react-icons/pi'
import Link from 'next/link'
import Image from 'next/image'

import { Modal } from './modal'

export function SignIn() {
  const session = useSession()

  const isAuthenticated = session.status === 'authenticated'

  return (
    <Modal.Root>
      <Modal.Trigger asChild>
        {!isAuthenticated ? (
          <button className="text-xs text-white font-medium h-8 px-5 w-full bg-zinc-800 rounded-md">
            <p>Sign in</p>
          </button>
        ) : (
          <div className="text-xs text-white font-medium h-8 pl-2 w-full rounded-md flex items-center justify-between">
            <section className="flex items-center space-x-2">
              {session.data.user?.image && (
                <Image
                  alt="Profile image"
                  src={session.data.user.image}
                  width={30}
                  height={30}
                  className="rounded-md"
                />
              )}
            </section>

            <Link
              href="/settings"
              className="flex items-center justify-center w-8 h-8 bg-zinc-800 rounded-md"
            >
              <PiGearDuotone size={18} />
            </Link>
          </div>
        )}
      </Modal.Trigger>

      <Modal.Portal>
        <Modal.Content>
          <Modal.Title>{isAuthenticated ? 'Logged' : 'Sign in'}</Modal.Title>
          <Modal.Description>
            {isAuthenticated
              ? `You are logged in as ${session.data.user?.name} with email ${session.data.user?.email}, do you want to logout?`
              : `You can remove your login whenever you want, this section is only
            for you have the best possible experience.`}
          </Modal.Description>

          <div className="flex flex-col items-center space-y-2.5 mt-5">
            {isAuthenticated ? (
              <button
                className="flex items-center justify-center text-xs text-zinc-800 font-semibold h-8 w-full bg-white rounded hover:bg-opacity-80"
                onClick={() => signOut()}
              >
                <FaSadCry size={18} className="mr-1.5" /> I want to leave
              </button>
            ) : (
              <button
                className="flex items-center justify-center text-xs text-zinc-800 font-semibold h-8 w-full bg-white rounded hover:bg-opacity-80"
                onClick={() => signIn()}
              >
                <BsGoogle size={18} className="mr-1.5" /> with Google
              </button>
            )}
          </div>
        </Modal.Content>
      </Modal.Portal>
    </Modal.Root>
  )
}

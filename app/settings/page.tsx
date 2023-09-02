'use client'

import { useSession, signOut } from 'next-auth/react'
import { useCallback } from 'react'
import { useRouter } from 'next/navigation'

import { Switch } from '@/components/switch'

export default function Page() {
  const { data } = useSession()
  const { back } = useRouter()

  const handleSignOut = useCallback(() => {
    signOut()

    back()
  }, [back])

  return (
    <div className="min-h-screen h-full w-full max-w-[calc(100%_-_15rem)] ml-auto bg-[#050505] prose prose-invert prose-h1:text-[1.25rem] prose-p:text-sm">
      <div className="pt-20 max-w-[50rem] mx-auto w-full prose prose-invert prose-h3:text-[17px] prose-p:text-white">
        <header className="flex items-center justify-between">
          <div className="block">
            <h1>Settings & My Account</h1>

            <p>{data?.user?.name}</p>
          </div>

          <button
            type="button"
            onClick={() => handleSignOut()}
            className="bg-red-500/50 border border-red-600 h-8 px-4 text-xs font-medium rounded-md hover:bg-red-600/50"
          >
            Sign Out
          </button>
        </header>

        <section className="mt-5 border-t border-t-zinc-800/50 pt-5">
          <Switch label="Dark mode" />
        </section>
      </div>
    </div>
  )
}

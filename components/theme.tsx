'use client'

import { useTheme } from 'next-themes'

import { Sun } from './icons/sun'
import { Moon } from './icons/moon'

export function Theme() {
  const { setTheme, theme } = useTheme()

  return (
    <button
      className="text-zinc-800 dark:text-white text-xs"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  )
}

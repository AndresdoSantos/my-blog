'use client'

import { ReactNode } from 'react'
import { SessionProvider as NextSessionProvider } from 'next-auth/react'

interface Props {
  children?: ReactNode
}

export default function SessionProvider({ children }: Props) {
  return <NextSessionProvider>{children}</NextSessionProvider>
}

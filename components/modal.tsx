'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { ComponentProps } from 'react'

type RootProps = ComponentProps<typeof Dialog.Root>

function Root({ children, ...props }: RootProps) {
  return <Dialog.Root {...props}>{children}</Dialog.Root>
}

type PortalProps = ComponentProps<typeof Dialog.Portal>

function Portal({ children, ...props }: PortalProps) {
  return (
    <Dialog.Portal {...props}>
      <Dialog.Overlay className="bg-zinc-900/80 data-[state=open]:animate-overlayShow fixed inset-0 backdrop-blur-sm" />
      <Dialog.Portal>{children}</Dialog.Portal>
    </Dialog.Portal>
  )
}

type TriggerProps = ComponentProps<typeof Dialog.Trigger>

function Trigger({ children, ...props }: TriggerProps) {
  return <Dialog.Trigger {...props}>{children}</Dialog.Trigger>
}

type ContentProps = ComponentProps<typeof Dialog.Content>

function Content({ children, ...props }: ContentProps) {
  return (
    <Dialog.Content
      className="font-sans data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[400px] max-w-[400px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-[#1c1c1c] z-50 p-4 focus:outline-none border border-zinc-700"
      {...props}
    >
      {children}
    </Dialog.Content>
  )
}

type TitleProps = ComponentProps<typeof Dialog.Title>

function Title({ children, ...props }: TitleProps) {
  return (
    <Dialog.Title className="text-[1.25rem] font-bold text-white" {...props}>
      {children}
    </Dialog.Title>
  )
}

type DescriptionProps = ComponentProps<typeof Dialog.Description>

function Description({ children, ...props }: DescriptionProps) {
  return (
    <Dialog.Description
      className="text-[0.75rem] text-zinc-100 block mt-2.5"
      {...props}
    >
      {children}
    </Dialog.Description>
  )
}

export const Modal = {
  Content,
  Trigger,
  Root,
  Portal,
  Title,
  Description,
}

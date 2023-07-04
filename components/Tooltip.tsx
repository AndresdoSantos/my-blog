'use client'

import * as RUITooltip from '@radix-ui/react-tooltip'

type Props = {
  children: JSX.Element
  message: string
}

export function Tooltip({ children, message }: Props) {
  return (
    <RUITooltip.Provider>
      <RUITooltip.Root>
        <RUITooltip.Trigger asChild>
          <button>{children}</button>
        </RUITooltip.Trigger>
        <RUITooltip.Portal>
          <RUITooltip.Content
            className="text-xs border data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
            sideOffset={5}
          >
            {message}
            <RUITooltip.Arrow className="fill-white" />
          </RUITooltip.Content>
        </RUITooltip.Portal>
      </RUITooltip.Root>
    </RUITooltip.Provider>
  )
}

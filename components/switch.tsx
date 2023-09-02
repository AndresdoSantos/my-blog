import * as RadixSwitch from '@radix-ui/react-switch'

type Props = {
  label: string
}

export function Switch({ label }: Props) {
  return (
    <div className="flex items-center">
      <RadixSwitch.Root
        className="w-[42px] h-[26px] border border-zinc-700/50 rounded-full relative bg-zinc-800/50 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-800 outline-none cursor-default"
        style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}
      >
        <RadixSwitch.Thumb className="block w-[16px] h-[16px] bg-white rounded-full transition-transform duration-100 translate-x-[5px] will-change-transform data-[state=checked]:translate-x-[19px]" />
      </RadixSwitch.Root>

      <label
        className="text-white text-[13px] font-medium leading-none pl-[15px]"
        htmlFor={label}
      >
        {label}
      </label>
    </div>
  )
}

import { IconType } from 'react-icons'

import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io'

interface BoxProps {
  percentage: number
  title: string
  count: number
  icon1: IconType
}

const formatCount = (count: number): string => {
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + 'm'
  } else if (count >= 1000) {
    return (count / 1000).toFixed(1) + 'k'
  }
  return count.toString()
}

const Box = ({ percentage, title, count, icon1: Icon1 }: BoxProps) => {
  const percentageColorClass =
    percentage < 0
      ? 'text-red-600'
      : percentage === 0
        ? 'text-slate-700'
        : 'text-green-600'

  const ChosenIcon = percentage < 0 ? IoMdArrowDropdown : IoMdArrowDropup

  return (
    <div className="w-full rounded-md border border-slate-200 bg-white p-3 shadow-md">
      <div className="flex justify-between">
        <div className="text-md rounded-md border border-slate-300 p-2">
          <Icon1 />
        </div>
        <p className={`flex items-center text-xs ${percentageColorClass}`}>
          <span className="text-lg">
            <ChosenIcon />
          </span>
          {formatCount(percentage)}%
        </p>
      </div>

      <div className="mt-6">
        <p className="text-xs text-slate-500">{title}</p>
        <p className="mt-1 text-xl font-semibold text-slate-700">
          {formatCount(count)}
        </p>
      </div>
    </div>
  )
}

export default Box

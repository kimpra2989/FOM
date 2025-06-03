import { FC } from 'react'
import {
  Circle11,
  Circle12,
  Circle13,
  Circle21,
  Circle22,
  Circle23,
  Circle31,
  Circle33,
  Square11,
  Square12,
  Square13,
  Square21,
  Square22,
  Square23,
  Square31,
  Square32,
  Square33,
  Triangle11,
  Triangle12,
  Triangle13,
  Triangle22,
  Triangle23,
  Triangle31,
  Triangle32,
  Triangle33,
} from './base'

interface Props {
  color: string
  hex: string
  shape: number[]
}

const BasePattern: FC<Props> = ({ color, hex, shape }) => {
  const [mainIdx, subIdx] = shape
  const key = `${color}-${mainIdx}-${subIdx}`
  const Component = patternMap[key]
  return <Component color={hex} />
}

const patternMap: Record<string, FC<{ color: string }>> = {
  // Red → Circle
  'red-0-0': Circle11,
  'red-0-1': Circle12,
  'red-0-2': Circle13,
  'red-1-0': Circle21,
  'red-1-1': Circle22,
  'red-1-2': Circle23,
  'red-2-0': Circle31,
  // 'red-2-1': Circle32,
  'red-2-2': Circle33,

  // Green → Triangle
  'green-0-0': Triangle11,
  'green-0-1': Triangle12,
  'green-0-2': Triangle13,
  // 'green-1-0': Triangle21,
  'green-1-1': Triangle22,
  'green-1-2': Triangle23,
  'green-2-0': Triangle31,
  'green-2-1': Triangle32,
  'green-2-2': Triangle33,

  // Blue → Square
  'blue-0-0': Square11,
  'blue-0-1': Square12,
  'blue-0-2': Square13,
  'blue-1-0': Square21,
  'blue-1-1': Square22,
  'blue-1-2': Square23,
  'blue-2-0': Square31,
  'blue-2-1': Square32,
  'blue-2-2': Square33,
}

export default BasePattern

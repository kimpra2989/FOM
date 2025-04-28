import { FC } from 'react'
import { Text } from './base'

interface Props {
  width?: number
  height?: number
  text?: string[]
  textX?: number
  textY?: number
}

const Circle: FC<Props> = ({
  width = 100,
  height = 100,
  text,
  textX = 50,
  textY = 50,
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="49" stroke="white" strokeWidth={1} />

      {text && <Text text={text} textX={textX} textY={textY} />}
    </svg>
  )
}

export default Circle

import { FC } from 'react'
import { Text } from '.'

interface Props {
  width?: number
  height?: number
  text?: string[]
  textX?: number
  textY?: number
  d: string
}

const Path: FC<Props> = ({
  width = 100,
  height = 100,
  text,
  textX = 50,
  textY = 50,
  d,
}) => {
  return (
    <svg width={width} height={height} viewBox="-0.5 -0.5 101 101">
      <path d={d} stroke="white" stroke-width="1" />

      {text && <Text text={text} textX={textX} textY={textY} />}
    </svg>
  )
}

export default Path

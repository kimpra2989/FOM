import { FC } from 'react'
import { Group, Rect } from 'react-konva'
import { Image, Text } from '../base'
import { Shape } from '../constants'

interface Props {
  x: number
  y: number
  imageUrl?: string
}

const Square: FC<Props> = ({ x, y, imageUrl }) => {
  const len = Shape.square.len

  return imageUrl ? (
    <Image
      x={x}
      y={y}
      offset={{ x: len / 2, y: len / 2 }}
      width={len}
      height={len}
      imageUrl={imageUrl}
      alt="pattern image"
    />
  ) : (
    <Group x={x} y={y} offset={{ x: len / 2, y: len / 2 }}>
      <Rect width={len} height={len} stroke="white" strokeWidth={1} />
      <Text width={len} height={len} />
    </Group>
  )
}

export default Square

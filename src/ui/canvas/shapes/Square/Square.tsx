import { FC } from 'react'
import { Rect } from 'react-konva'
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
      width={len}
      height={len}
      imageUrl={imageUrl}
      alt="pattern image"
    />
  ) : (
    <>
      <Rect
        x={x}
        y={y}
        width={len}
        height={len}
        stroke="white"
        strokeWidth={1}
      />
      <Text x={x} y={y} width={len} height={len} />
    </>
  )
}

export default Square

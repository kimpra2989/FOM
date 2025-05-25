import { FC } from 'react'
import { Circle } from 'react-konva'
// import useImage from 'use-image'
import { Image, Text } from '../base'
import { Shape } from '../constants'

interface Props {
  x: number
  y: number
  imageUrl?: string
}

const CircleShape: FC<Props> = ({ x, y, imageUrl }) => {
  const R = Shape.circle.r

  return imageUrl ? (
    <Image
      x={x}
      y={y}
      imageUrl={imageUrl}
      offset={{ x: R, y: R }}
      width={R * 2}
      height={R * 2}
      cornerRadius={R * 2}
      alt="pattern image"
    />
  ) : (
    <>
      <Circle x={x} y={y} radius={R} stroke="white" />
      <Text x={x - R} y={y - R} width={R * 2} height={R * 2} />
    </>
  )
}

export default CircleShape

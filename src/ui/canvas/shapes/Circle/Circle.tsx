import { FC } from 'react'
import { Circle, Group } from 'react-konva'
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
    <Group x={x} y={y}>
      <Circle radius={R} stroke="white" strokeWidth={1} />
      <Text x={-R} y={-R} width={R * 2} height={R * 2} />
    </Group>
  )
}

export default CircleShape

import { FC } from 'react'
import { Group, RegularPolygon } from 'react-konva'
import { Image, Text } from '../base'
import { Shape } from '../constants'

interface Props {
  x: number
  y: number
  imageUrl?: string
}

const TriangleShape: FC<Props> = ({ x, y, imageUrl }) => {
  const R = Shape.triangle.r
  const len = R * Math.sin(Math.PI / 3)

  return imageUrl ? (
    <Group
      x={x}
      y={y}
      clipFunc={(ctx) => {
        ctx.beginPath()
        ctx.moveTo(0, -R)
        ctx.lineTo(len, R * Math.cos(Math.PI / 3))
        ctx.lineTo(-len, R * Math.cos(Math.PI / 3))
        ctx.closePath()
      }}
    >
      <Image
        x={-len}
        y={-R}
        imageUrl={imageUrl}
        width={2 * len}
        height={(3 * R) / 2}
        alt="pattern image"
      />
    </Group>
  ) : (
    <>
      <RegularPolygon x={x} y={y} radius={R} stroke="white" sides={3} />
      <Text x={x - R} y={y - R} width={R * 2} height={R * 2} />
    </>
  )
}

export default TriangleShape

import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { Group, RegularPolygon } from 'react-konva'
import { BasePropsType, Image, Text } from '../base'
import { Shape } from '../constants'

type Props = BasePropsType

const TriangleShape: FC<Props> = ({
  x,
  y,
  imageUrl,
  handleMouseOver,
  handleMouseOut,
}) => {
  const R = Shape.triangle.r
  const len = R * Math.sin(Math.PI / 3)
  const router = useRouter()

  const sharedProps = {
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut,
  }

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
      {...sharedProps}
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
    <Group
      x={x}
      y={y}
      onClick={() => router.push('/patterns/create')}
      {...sharedProps}
    >
      <RegularPolygon radius={R} stroke="white" sides={3} strokeWidth={1} />
      <Text x={-R} y={-R} width={R * 2} height={R * 2} />
    </Group>
  )
}

export default TriangleShape

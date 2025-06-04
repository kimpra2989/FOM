import { useRoute } from '#/hooks'
import { FC } from 'react'
import { Circle, Group } from 'react-konva'
import { BasePropsType, Image, Text } from '../base'
import { Shape } from '../constants'

type Props = BasePropsType

const CircleShape: FC<Props> = ({
  x,
  y,
  imageUrl,
  handleMouseOver,
  handleMouseOut,
}) => {
  const R = Shape.circle.r

  const sharedProps = {
    x,
    y,
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut,
  }

  const { goto } = useRoute()

  return imageUrl ? (
    <Group
      {...sharedProps}
      clipFunc={(ctx) => {
        ctx.beginPath()
        ctx.arc(0, 0, R, 0, Math.PI * 2)
        ctx.closePath()
      }}
      onClick={goto('/patterns')}
    >
      <Image
        x={0}
        y={0}
        offset={{ x: R, y: R }}
        imageUrl={imageUrl}
        alt="pattern image"
      />
    </Group>
  ) : (
    <Group onClick={goto('/patterns/create')} {...sharedProps}>
      <Circle radius={R} stroke="white" strokeWidth={1} />
      <Text x={-R} y={-R} width={R * 2} height={R * 2} />
    </Group>
  )
}

export default CircleShape

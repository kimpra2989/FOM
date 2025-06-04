import { useRoute } from '#/hooks'
import { FC } from 'react'
import { Group, Rect } from 'react-konva'
import { BasePropsType, Image, Text } from '../base'
import { Shape } from '../constants'

type Props = BasePropsType

const Square: FC<Props> = ({
  x,
  y,
  imageUrl,
  handleMouseOver,
  handleMouseOut,
}) => {
  const len = Shape.square.len

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
        ctx.moveTo(0, 0)
        ctx.lineTo(len, 0)
        ctx.lineTo(len, len)
        ctx.lineTo(0, len)
        ctx.closePath()
      }}
      onClick={goto('/patterns')}
    >
      <Image
        x={0}
        y={0}
        offset={{ x: len / 2, y: len / 2 }}
        imageUrl={imageUrl}
        alt="pattern image"
      />
    </Group>
  ) : (
    <Group
      offset={{ x: len / 2, y: len / 2 }}
      {...sharedProps}
      onClick={goto('/patterns/create')}
    >
      <Rect width={len} height={len} stroke="white" strokeWidth={1} />
      <Text width={len} height={len} />
    </Group>
  )
}

export default Square

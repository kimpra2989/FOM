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

  return imageUrl ? (
    <Image
      offset={{ x: len / 2, y: len / 2 }}
      width={len}
      height={len}
      imageUrl={imageUrl}
      alt="pattern image"
      {...sharedProps}
    />
  ) : (
    <Group offset={{ x: len / 2, y: len / 2 }} {...sharedProps}>
      <Rect width={len} height={len} stroke="white" strokeWidth={1} />
      <Text width={len} height={len} />
    </Group>
  )
}

export default Square

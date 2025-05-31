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

  return imageUrl ? (
    <Image
      imageUrl={imageUrl}
      offset={{ x: R, y: R }}
      width={R * 2}
      height={R * 2}
      cornerRadius={R * 2}
      alt="pattern image"
      {...sharedProps}
    />
  ) : (
    <Group {...sharedProps}>
      <Circle radius={R} stroke="white" strokeWidth={1} />
      <Text x={-R} y={-R} width={R * 2} height={R * 2} />
    </Group>
  )
}

export default CircleShape

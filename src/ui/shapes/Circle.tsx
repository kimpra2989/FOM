import { FC } from 'react'
import { Text } from './base'
import { SVGTextProps } from './base/Text'

interface Props extends SVGTextProps {
  width?: number
  height?: number
  image?: string
}

const Circle: FC<Props> = ({
  width = 100,
  height = 100,
  text,
  textX = 50,
  textY = 50,
  image,
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="49" stroke="white" strokeWidth="1" />

      {image ? (
        <image
          href={image}
          clipPath="url(#circle)"
          preserveAspectRatio="xMinYMin slice"
          width="100"
          height="100"
        />
      ) : (
        <Text text={text} textX={textX} textY={textY} />
      )}
    </svg>
  )
}

export default Circle

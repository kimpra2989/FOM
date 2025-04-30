import { SHAPES } from '#/constants'
import { FC } from 'react'
import Text, { SVGTextProps } from './base/Text'

interface Props extends SVGTextProps {
  width?: number
  height?: number
  image?: string
}

const Square: FC<Props> = ({ width, height, text, textX, textY, image }) => {
  return (
    <svg width={width} height={height} viewBox="-0.5 -0.5 101 101">
      <path d={SHAPES.SQUARE} stroke="white" strokeWidth="1" />

      {image ? (
        <image
          href={image}
          clipPath="url(#square)"
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

export default Square

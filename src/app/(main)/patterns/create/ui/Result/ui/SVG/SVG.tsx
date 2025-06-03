import { FC, PropsWithChildren } from 'react'
import { svgProps } from '../../constants'

interface Props extends PropsWithChildren {
  scale?: number
  fill?: string
}

const SVG: FC<Props> = ({ scale = 1, children, fill = 'black' }) => {
  return (
    <svg
      {...svgProps}
      width={svgProps.width * scale}
      height={svgProps.height * scale}
    >
      <rect width={svgProps.width} height={svgProps.height} fill="white" />
      <rect
        width={svgProps.width}
        height={svgProps.height}
        fill={fill}
        opacity={0.8}
      />

      {children}
    </svg>
  )
}

export default SVG

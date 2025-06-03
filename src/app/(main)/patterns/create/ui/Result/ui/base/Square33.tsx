import { FC } from 'react'
import { svgProps } from '../../constants'
import { SVG } from '../SVG'

interface Props {
  color: string
}

const Square33: FC<Props> = ({ color }) => {
  const Width = 20
  const Height = 20

  return (
    <SVG fill={color}>
      <defs>
        <g id="cul3_2">
          <rect x={0} y={0} width={Width / 3} height={Height} opacity={0.37} />
          <rect
            x={Width / 3}
            y={0}
            width={Width / 3}
            height={Height}
            opacity={0.7}
          />
          <rect x={(2 * Width) / 3} y={0} width={Width / 3} height={Height} />
        </g>

        <g
          id="cul3_2_rotate90"
          transform={`rotate(90, ${Width / 2} ${Height / 2})`}
        >
          <use href="#cul3_2" />
        </g>
      </defs>

      <defs>
        <pattern
          id="cul3_2_p"
          width={Width * 2}
          height={Height * 2}
          patternUnits="userSpaceOnUse"
        >
          <use href="#cul3_2" />
          <use href="#cul3_2_rotate90" x={Width} />
          <use href="#cul3_2_rotate90" y={Height} />
          <use href="#cul3_2" x={Width} y={Height} />
        </pattern>
      </defs>

      <rect
        width={svgProps.width}
        height={svgProps.height}
        fill="url(#cul3_2_p)"
      />
    </SVG>
  )
}
export default Square33

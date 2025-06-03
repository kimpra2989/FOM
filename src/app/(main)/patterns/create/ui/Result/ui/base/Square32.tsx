import { FC } from 'react'
import { svgProps } from '../../constants'
import { SVG } from '../SVG'

interface Props {
  color: string
}

// TODO: 배치
const Square32: FC<Props> = ({ color }) => {
  const UnitWidth = 20
  const UnitHeight = 20
  const ShapeWidth = 3.58 * 3
  const ShapeHeight = 3.58 * 3
  const Gap = 9

  return (
    <SVG fill={color}>
      <defs>
        <g id="cul3_2">
          <rect x={0} y={0} width={ShapeWidth / 3} height={ShapeWidth / 3} />
          <rect
            x={ShapeWidth / 3}
            y={ShapeWidth / 3}
            width={ShapeWidth / 3}
            height={ShapeWidth / 3}
          />
          <rect
            x={(2 * ShapeWidth) / 3}
            y={(2 * ShapeWidth) / 3}
            width={ShapeWidth / 3}
            height={ShapeWidth / 3}
          />
        </g>
      </defs>

      <defs>
        <pattern
          id="cul3_2_p"
          width={(UnitWidth + Gap) * 2}
          height={(UnitHeight + Gap) * 2}
          patternUnits="userSpaceOnUse"
        >
          <use
            href="#cul3_2"
            x={UnitWidth / 2 - ShapeWidth / 2}
            y={UnitHeight / 2 - ShapeHeight / 2}
          />

          <use
            href="#cul3_2"
            x={UnitWidth + Gap + UnitWidth / 2 - ShapeWidth / 2}
            y={UnitHeight + Gap + UnitHeight / 2 - ShapeHeight / 2}
          />
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
export default Square32

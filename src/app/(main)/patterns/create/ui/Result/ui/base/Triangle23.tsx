import { FC } from 'react'
import { svgProps } from '../../constants'
import { SVG } from '../SVG'

interface Props {
  color: string
}

const Triangle23: FC<Props> = ({ color }) => {
  const ShapeWidth = 5
  const ShapeHeight = 18
  const Gap = 1

  return (
    <SVG fill={color}>
      <defs>
        <g id="per2_3">
          <path d="M5 18C5 18 0 13.3941 0 8.72529C0 5.58536 3.05876 2.33376 5 -2.9735e-07L5 18Z" />
        </g>

        <g id="per2_3_reverse">
          <use
            href="#per2_3"
            transform={`rotate(180, ${ShapeWidth / 2}, ${ShapeHeight / 2})`}
          />
        </g>
      </defs>

      <defs>
        <pattern
          id="per2_3_p"
          width={ShapeWidth * 4 + Gap * 2}
          height={ShapeHeight * 2}
          viewBox={`${-Gap / 2} 0 ${ShapeWidth * 4 + Gap * 2} ${
            ShapeHeight * 2
          }`}
          patternUnits="userSpaceOnUse"
        >
          <use href="#per2_3" x={0} y={ShapeHeight} />
          <use href="#per2_3_reverse" x={ShapeWidth} />
          <use href="#per2_3" x={ShapeWidth * 2 + Gap} />
          <use
            href="#per2_3_reverse"
            x={ShapeWidth * 3 + Gap}
            y={ShapeHeight}
          />
        </pattern>
      </defs>

      <rect
        width={svgProps.width}
        height={svgProps.height}
        fill="url(#per2_3_p)"
      />
    </SVG>
  )
}

export default Triangle23

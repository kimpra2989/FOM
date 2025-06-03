import { FC } from 'react'
import { svgProps } from '../../constants'
import { SVG } from '../SVG'

interface Props {
  color: string
}

const Triangle13: FC<Props> = ({ color }) => {
  // const shapeWidth = 7
  const shapeHeight = 7
  const unitWidth = 20
  const unitHeight = 20

  return (
    <SVG fill={color}>
      <defs>
        <g id="per1_3">
          <path d="M7 3.50184L5.56759 4.35613L5.97265 5.97633L4.35613 5.5676L3.49816 7L2.64387 5.5676L1.02368 5.97633L1.43241 4.35613L0 3.50184L1.43241 2.64387L1.02368 1.02735L2.64387 1.4324L3.49816 0L4.35613 1.4324L5.97265 1.02735L5.56759 2.64387L7 3.50184Z" />
        </g>
      </defs>

      <defs>
        <pattern
          id="per1_3_line"
          width={unitWidth * 2}
          height={unitHeight}
          patternUnits="userSpaceOnUse"
        >
          <use
            href="#per1_3"
            x={unitWidth / 2 - shapeHeight / 2}
            y={unitHeight / 2 - shapeHeight / 2}
          />
        </pattern>

        <pattern
          id="per1_3_p"
          width={svgProps.width}
          height={unitHeight * 2}
          patternUnits="userSpaceOnUse"
        >
          <rect
            width={svgProps.width}
            height={unitHeight}
            fill="url(#per1_3_line)"
          />
          <g transform={`translate(${-unitWidth}, 0)`}>
            <rect
              y={unitHeight}
              width={svgProps.width}
              height={unitHeight}
              fill="url(#per1_3_line)"
            />
          </g>
        </pattern>
      </defs>

      <rect
        width={svgProps.width}
        height={svgProps.height}
        fill="url(#per1_3_p)"
      />
    </SVG>
  )
}

export default Triangle13

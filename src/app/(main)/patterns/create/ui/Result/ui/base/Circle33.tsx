import { FC } from 'react'
import { svgProps } from '../../constants'
import { createPoints } from '../../fn'
import { SVG } from '../SVG'

interface Props {
  color: string
}

const Circle33: FC<Props> = ({ color }) => {
  const Width = 20
  const Height = 43
  const gap = Height - Width * 2
  const Rows = 4
  const Cols = 4

  const points = createPoints(Rows, Cols)

  const angles = [0, 90, 180, 270]

  return (
    <SVG fill={color} scale={1.5}>
      <defs>
        <g id="exp3_3">
          <path
            opacity="0.3"
            d="M10.0008 43C8.71974 43 7.42256 42.7564 6.14791 42.2791C3.58897 41.3178 1.58687 39.2654 0.663072 36.6479C-0.508571 33.3387 -0.0997864 29.8834 1.77677 27.1717C4.13294 23.7716 4.13616 19.2511 1.78965 15.8445C0.637322 14.1688 0 12.1261 0 10.0867C0 4.52375 4.48379 0 9.9976 0C10.8409 0 11.7003 0.107168 12.5469 0.315007C16.1004 1.19183 18.8396 3.97167 19.6958 7.5634C20.3975 10.5089 19.8761 13.4446 18.2249 15.825C15.8687 19.2251 15.8623 23.7456 18.2088 27.1523C19.3611 28.828 19.9984 30.8706 19.9984 32.91C19.9984 35.6055 18.9587 38.1385 17.0693 40.0415C15.1799 41.9478 12.6692 42.9968 10.0008 42.9968V43Z"
          />
        </g>

        <g id="exp3_3">
          {angles.map((angle, idx) => (
            <use
              href="#exp3_3"
              x="0"
              y="0"
              transform-origin="10 10"
              transform={`rotate(${angle})`}
              key={`${angle}-${idx}`}
            />
          ))}
        </g>

        <pattern
          id="exp3_3_p"
          x={-gap / 2}
          y={-gap / 2}
          viewBox={`${-gap / 2} ${-gap / 2} ${Height + gap} ${Height + gap}`}
          width={Height + gap}
          height={Height + gap}
          patternUnits="userSpaceOnUse"
        >
          {points.map((point) => (
            <use
              href="#exp3_3"
              x={point[0] * (Height - Width)}
              y={point[1] * (Height - Width)}
              key={point.toString()}
            />
          ))}
        </pattern>
      </defs>

      <rect
        width={svgProps.width}
        height={svgProps.height}
        fill="url(#exp3_3_p)"
      />
    </SVG>
  )
}

export default Circle33

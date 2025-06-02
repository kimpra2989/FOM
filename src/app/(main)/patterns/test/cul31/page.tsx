import { svgProps } from '../constants'

export default function Cul31Page() {
  const Width = 20
  const Height = 20

  return (
    <svg {...svgProps}>
      <defs>
        <g id="cul3_1">
          {[
            [1, 0],
            [3, 0],
            [0, 1],
            [2, 1],
            [1, 2],
            [3, 2],
            [0, 3],
            [2, 3],
          ].map(([x, y]) => (
            <rect
              x={(x * Width) / 4}
              y={(y * Height) / 4}
              width={Width / 4}
              height={Height / 4}
              key={`${x}_${y}`}
            />
          ))}
        </g>
      </defs>

      <defs>
        <pattern
          id="cul3_1_line"
          width={Width * 4}
          height={Height}
          patternUnits="userSpaceOnUse"
        >
          <rect width={Width} height={Height} />
          <use href="#cul3_1" x={Width} />
          <rect width={Width} height={Height} opacity={0} />
          <use href="#cul3_1" x={Width * 3} />
        </pattern>
      </defs>

      <defs>
        <pattern
          id="cul3_1_p"
          width={svgProps.width}
          height={Height * 3}
          patternUnits="userSpaceOnUse"
        >
          <rect
            width={svgProps.width}
            height={Height}
            fill="url(#cul3_1_line)"
          />
          <g transform={`translate(${Width}, ${Height})`}>
            <rect
              width={svgProps.width}
              height={Height}
              fill="url(#cul3_1_line)"
            />
          </g>
          <g transform={`translate(${Width * 2}, ${Height * 2})`}>
            <rect
              width={svgProps.width}
              height={Height}
              fill="url(#cul3_1_line)"
            />
          </g>
        </pattern>
      </defs>

      <rect
        width={svgProps.width}
        height={svgProps.height}
        fill="url(#cul3_1_p)"
      />
    </svg>
  )
}

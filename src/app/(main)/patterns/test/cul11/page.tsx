import { svgProps } from '../constants'

export default function Cul11Page() {
  const Width = 20
  const Height = 20

  return (
    <svg {...svgProps}>
      <defs>
        <g id="cul1_1">
          <path
            d={`M ${Width / 2} 0 
                L ${Width} ${Height / 2}
                L ${Width / 2} ${Height}
                L ${0} ${Height / 2}
                Z`}
          />
        </g>
      </defs>

      <defs>
        <pattern
          id="cul1_1_p"
          width={Width * 2.5}
          height={Height}
          patternUnits="userSpaceOnUse"
        >
          <use href="#cul1_1" />
          <use href="#cul1_1" x={Width / 2} />
          <use href="#cul1_1" x={Width * 1.5} />
        </pattern>
      </defs>

      <rect
        width={svgProps.width}
        height={svgProps.height}
        fill="url(#cul1_1_p)"
      />
    </svg>
  )
}

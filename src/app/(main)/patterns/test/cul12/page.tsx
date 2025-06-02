import { svgProps } from '../constants'

export default function Cul12Page() {
  const Width = 20
  const Height = 20
  const opacity = 0.51

  return (
    <svg {...svgProps}>
      <defs>
        <g id="cul1_2">
          <path
            d={`
              M ${Width} 0
              v ${Height / 2}
              L 0 ${Height}
              v ${-Height / 2}
              Z`}
          />
        </g>
      </defs>

      <defs>
        <pattern
          id="cul1_2_p"
          width={Width}
          height={Height}
          viewBox={`0 ${Height / 2} ${Width} ${Height}`}
          patternUnits="userSpaceOnUse"
        >
          <use href="#cul1_2" />
          <use href="#cul1_2" y={Height / 2} opacity={opacity} />
          <use href="#cul1_2" y={Height} />
        </pattern>
      </defs>

      <rect
        width={svgProps.width}
        height={svgProps.height}
        fill="url(#cul1_2_p)"
      />
    </svg>
  )
}

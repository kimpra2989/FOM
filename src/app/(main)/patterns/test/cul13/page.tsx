import { svgProps } from '../constants'

export default function Cul13Page() {
  const UnitWidth = 20
  const UnitHeight = 20
  const ShapeWidth = 6.15
  const a = (ShapeWidth / 2 / 15) * 14
  const gap = (ShapeWidth / 2 / 15) * 2

  // 14 : 1
  return (
    <svg {...svgProps}>
      <defs>
        <g id="cul1_3" transform="rotate(45, 0, 0)">
          <rect x={-a - gap / 2} y={-a - gap / 2} width={a} height={a} />
          <rect x={gap / 2} y={gap / 2} width={a} height={a} />
          <rect x={-a - gap / 2} y={gap / 2} width={a} height={a} />
          <rect x={gap / 2} y={-a - gap / 2} width={a} height={a} />
        </g>
      </defs>

      <defs>
        <pattern
          id="cul1_3_p"
          width={UnitWidth * 2}
          height={UnitHeight * 2}
          patternUnits="userSpaceOnUse"
        >
          <use href="#cul1_3" x={UnitWidth / 2} y={UnitHeight / 2} />
          <use
            href="#cul1_3"
            x={(UnitWidth * 3) / 2}
            y={(UnitHeight * 3) / 2}
          />
        </pattern>
      </defs>

      <rect
        width={svgProps.width}
        height={svgProps.height}
        fill="url(#cul1_3_p)"
      />
    </svg>
  )
}

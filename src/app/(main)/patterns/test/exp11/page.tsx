import { useMemo } from 'react'
import { svgProps } from '../constants'

export default function Exp11Page() {
  const Width = 20
  const Height = 20
  const Rows = Math.ceil(svgProps.width / Width)
  const Cols = Math.ceil(svgProps.height / Height)
  const Spacing = Width / 2
  const points = useMemo(
    () =>
      Array.from({ length: Rows + 1 }, (_, row) =>
        Array.from({ length: Cols + 1 }, (_, col) => ({
          x: row * Spacing,
          y: col * Spacing,
          angle: Math.floor(Math.random() * 4) * 90,
        }))
      ),
    [Rows, Cols, Spacing]
  )

  return (
    <svg {...svgProps}>
      <defs>
        <g id="exp1_1">
          <path
            d={`M 0 -${Width / 2}
             L 0 0
             L ${Width / 2} 0
             A ${Width / 2} ${Width / 2} 0 0 0 0 -${Width / 2}`}
            opacity="0.2"
          />
          <path
            d={`M 0 -${Width / 2}
             L 0 0
             L -${Width / 2} 0
             A ${Width / 2} ${Width / 2} 0 0 1 0 -${Width / 2}`}
            opacity="0.4"
          />
          <path
            d={`M 0 ${Width / 2}
             L 0 0
             L -${Width / 2} 0
             A ${Width / 2} ${Width / 2} 0 0 0 0 ${Width / 2}`}
          />
          <path
            d={`M 0 ${Width / 2}
             L 0 0
             L ${Width / 2} 0
             A ${Width / 2} ${Width / 2} 0 0 1 0 ${Width / 2}`}
            opacity="0"
          />
        </g>
      </defs>

      {points.map((row) =>
        row.map(({ x, y, angle }) => (
          <use
            href="#exp1_1"
            x={x}
            y={y}
            transform={`rotate(${angle} ${x} ${y})`}
            key={`${x}-${y}`}
          />
        ))
      )}
    </svg>
  )
}

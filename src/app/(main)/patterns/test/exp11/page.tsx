import { useMemo } from 'react'

export default function Exp11Page() {
  const Rows = 10
  const Cols = 10
  const Spacing = 10
  const points = useMemo(
    () =>
      Array.from({ length: Rows + 1 }, (_, row) =>
        Array.from({ length: Cols + 1 }, (_, col) => ({
          x: row * Spacing,
          y: col * Spacing,
          angle: Math.floor(Math.random() * 4) * 90,
        }))
      ),
    []
  )

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="300"
      height="300"
      viewBox="0 0 100 100"
    >
      <defs>
        <g id="exp1_1">
          <path
            d="M 0 -10
             L 0 0
             L 10 0
             A 10 10 0 0 0 0 -10"
            opacity="0.2"
            fill="black"
          />
          <path
            d="M 0 -10
             L 0 0
             L -10 0
             A 10 10 0 0 1 0 -10"
            opacity="0.4"
            fill="black"
          />
          <path
            d="M 0 10
             L 0 0
             L -10 0
             A 10 10 0 0 0 0 10"
            fill="black"
          />
          <path
            d="M 0 10
             L 0 0
             L 10 0
             A 10 10 0 0 1 0 10"
            fill="black"
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

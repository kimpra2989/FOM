import { FC, useMemo } from 'react'
import { SVG } from '../SVG'

interface Props {
  color: string
}

const Circle11: FC<Props> = ({ color }) => {
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
    <SVG fill={color}>
      <defs>
        <g id="exp1_1">
          <path
            d="M 0 -10
             L 0 0
             L 10 0
             A 10 10 0 0 0 0 -10"
            opacity="0.2"
          />
          <path
            d="M 0 -10
             L 0 0
             L -10 0
             A 10 10 0 0 1 0 -10"
            opacity="0.4"
          />
          <path
            d="M 0 10
             L 0 0
             L -10 0
             A 10 10 0 0 0 0 10"
          />
          <path
            d="M 0 10
             L 0 0
             L 10 0
             A 10 10 0 0 1 0 10"
            opacity="0"
          />
        </g>
      </defs>

      {points.map((row) =>
        row.map(({ x, y, angle }) => (
          <use
            opacity={1}
            href="#exp1_1"
            x={x}
            y={y}
            transform={`rotate(${angle} ${x} ${y})`}
            key={`${x}-${y}`}
          />
        ))
      )}
    </SVG>
  )
}

export default Circle11

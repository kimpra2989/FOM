import { useMemo } from 'react'
import { svgProps } from '../constants'

export default function Exp13Page() {
  const Width = 39
  const Height = 66
  const Rows = 4
  const Cols = 6
  const RowSpacing = 70
  const ColSpacing = 60
  const points = useMemo(
    () =>
      Array.from({ length: Rows + 1 }, (_, row) =>
        Array.from({ length: Cols + 1 }, (_, col) => ({
          x: row * RowSpacing,
          y: col * ColSpacing,
          opacity: Math.random() > 0.5 ? 0.4 : 1,
          translate: {
            x: (Width / 3) * 2 * Math.random() - Width / 3,
            y: (Height / 3) * 2 * Math.random() - Height / 3,
          },
          angle: Math.floor(Math.random() * 4) * 90,
        }))
      ),
    []
  )

  return (
    <svg {...svgProps} viewBox="20 20 297 210">
      <defs>
        <path
          id="exp1_3"
          d="M0 19.5853V26.1517C0 26.3738 0.0113365 26.5959 0.0170051 26.818H0V66C21.535 66 39 48.4592 39 26.818H38.9717C38.9773 26.5959 38.9887 26.3738 38.9887 26.1517V19.5853C38.9887 8.77039 30.259 0 19.4943 0C8.72966 0 0 8.77039 0 19.5853Z"
        />
      </defs>

      {points.map((row) =>
        row.map(({ x, y, angle, opacity, translate }) => (
          <use
            href="#exp1_3"
            x={x}
            y={y}
            transform-origin={`${x} ${y}`}
            transform={`rotate(${angle} ${Width / 2} ${Height / 2}) translate(${
              translate.x
            } ${translate.y})`}
            opacity={opacity}
            key={`${x}-${y}`}
          />
        ))
      )}
    </svg>
  )
}

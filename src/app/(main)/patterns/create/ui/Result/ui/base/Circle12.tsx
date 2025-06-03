import { FC } from 'react'
import { svgProps } from '../../constants'
import { SVG } from '../SVG'

interface Props {
  color: string
}

const Circle12: FC<Props> = ({ color }) => {
  const Len = 30
  const Rows = Math.floor(svgProps.width / Len)
  const Cols = Math.floor(svgProps.height / Len)
  const points = Array.from({ length: Rows }, (_, row) =>
    Array.from({ length: Cols }, (_, col) => ({
      x: row * Len,
      y: col * Len,
      inversion: Math.random() < 0.5 ? -1 : 1,
    }))
  )

  return (
    <SVG fill={color}>
      <defs>
        <g id="exp1_2">
          <path
            d="M 10 0
                L 30 0
                L 30 20
                A 20 20 0 0 1 10 0"
          />
          <path
            d="M 0 10
                L 0 30
                L 20 30
                A 20 20 0 0 0 0 10"
          />
        </g>
      </defs>

      {points.map((row) =>
        row.map(({ x, y, inversion }) => (
          <g key={'' + x + y}>
            <use
              href="#exp1_2"
              x={x}
              y={y}
              transform-origin={`${x + Len / 2} ${y + Len / 2}`}
              transform={`scale(${inversion}, 1)`}
            />
          </g>
        ))
      )}
    </SVG>
  )
}

export default Circle12

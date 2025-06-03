import { FC } from 'react'
import { svgProps } from '../../constants'
import { SVG } from '../SVG'

interface Props {
  color: string
}

const Circle21: FC<Props> = ({ color }) => {
  const ShapeWidth = 11
  const ShapeHeight = 21
  const UnitWidth = 16
  const UnitHeight = 25
  const Scale = 5.5 / 10

  const Rows = Math.ceil(svgProps.height / UnitHeight)
  const Cols = Math.ceil(svgProps.width / UnitWidth) + 1

  return (
    <SVG fill={color} scale={1.5}>
      <defs>
        <g id="exp2_3">
          <path d="M5.16331 10.6711C5.16331 13.3575 2.9862 15.5346 0.299805 15.5346V15.8076C0.299805 18.494 2.47691 20.6712 5.16331 20.6712C7.84971 20.6712 10.0268 18.494 10.0268 15.8076V15.5346C7.34042 15.5346 5.16331 13.3575 5.16331 10.6711Z" />
          <path d="M5.16331 10.6712C5.16331 7.98475 7.34042 5.80765 10.0268 5.80765V5.53465C10.0268 2.84825 7.84971 0.671143 5.16331 0.671143C2.47691 0.671143 0.299805 2.84825 0.299805 5.53465V5.80765C2.9862 5.80765 5.16331 7.98475 5.16331 10.6712Z" />
        </g>

        <g id="exp2_3_small_rotated">
          <g transform={`scale(${Scale})`}>
            <use
              href="#exp2_3"
              transform={`translate(0 ${ShapeWidth})
                  rotate(-90)`}
            />
          </g>
        </g>
      </defs>

      {Array.from({ length: Rows }).map((_, rowIdx) =>
        Array.from({ length: Cols }).map((_, colIdx) => {
          const offsetX = rowIdx % 2 === 0 ? 0 : -UnitWidth / 2
          const x = colIdx * UnitWidth + offsetX
          const y = rowIdx * UnitHeight

          return (
            <g key={`${rowIdx}_${colIdx}`}>
              <use
                href="#exp2_3"
                x={x + UnitWidth / 2 - ShapeWidth / 2}
                y={y + 2}
              />
              <use
                href="#exp2_3_small_rotated"
                x={x + (-ShapeHeight * Scale) / 2}
                y={y + 2 + ShapeHeight / 2 - (ShapeWidth / 2) * Scale}
              />
            </g>
          )
        })
      )}
    </SVG>
  )
}

export default Circle21

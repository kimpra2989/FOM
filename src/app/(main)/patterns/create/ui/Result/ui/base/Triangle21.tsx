import { FC } from 'react'
import { svgProps } from '../../constants'
import { SVG } from '../SVG'

interface Props {
  color: string
}

const Triangle21: FC<Props> = ({ color }) => {
  const ShapeWidth = 20
  const ShapeHeight = 20
  const UnitWidth = ShapeWidth * 5
  const UnitHeight = ShapeHeight * 5

  const Rows = Math.floor(svgProps.height / UnitHeight)
  const Cols = Math.floor(svgProps.width / UnitWidth)

  const rotations = [0, 90, 180, 270]

  const getRandomRotation = () =>
    rotations[Math.floor(Math.random() * rotations.length)]

  return (
    <SVG fill={color}>
      <defs>
        <g id="per2_1">
          <path d="M20 10.0008L18.1952 13.3939L17.0717 17.0703L13.395 18.1954L10 20L6.60498 18.1954L2.92827 17.0703L1.80478 13.3939L0 10.0008L1.80478 6.60607L2.92827 2.92966L6.60498 1.80463L10 0L13.395 1.80463L17.0717 2.92966L18.1952 6.60607L20 10.0008Z" />
        </g>
      </defs>

      <defs>
        <g id="per2_1_unit">
          <use href="#per2_1" x={0} y={0} />
          <use href="#per2_1" x={ShapeWidth} y={0} />
          <use href="#per2_1" x={ShapeWidth * 2} y={0} />
          <use href="#per2_1" x={ShapeWidth * 3} y={0} />
          <use href="#per2_1" x={(ShapeWidth * 7) / 2} y={0} />
          <use href="#per2_1" x={(ShapeWidth * 8) / 2} y={0} />

          <use href="#per2_1" x={ShapeWidth * 2} y={ShapeHeight / 2} />
          <use href="#per2_1" x={ShapeWidth * 3} y={ShapeHeight / 2} />
          <use href="#per2_1" x={(ShapeWidth * 7) / 2} y={ShapeHeight / 2} />
          <use href="#per2_1" x={(ShapeWidth * 8) / 2} y={ShapeHeight / 2} />

          <use href="#per2_1" x={0} y={ShapeHeight} />
          <use href="#per2_1" x={ShapeWidth} y={ShapeHeight} />
          <use href="#per2_1" x={ShapeWidth * 3} y={ShapeHeight} />
          <use href="#per2_1" x={(ShapeWidth * 7) / 2} y={ShapeHeight} />
          <use href="#per2_1" x={(ShapeWidth * 8) / 2} y={ShapeHeight} />

          <use href="#per2_1" x={0} y={(ShapeHeight * 3) / 2} />
          <use href="#per2_1" x={ShapeWidth} y={(ShapeHeight * 3) / 2} />
          <use href="#per2_1" x={ShapeWidth * 2} y={(ShapeHeight * 3) / 2} />

          <use href="#per2_1" x={0} y={(ShapeHeight * 4) / 2} />
          <use href="#per2_1" x={ShapeWidth} y={(ShapeHeight * 4) / 2} />
          <use href="#per2_1" x={ShapeWidth * 2} y={(ShapeHeight * 4) / 2} />
          <use href="#per2_1" x={ShapeWidth * 3} y={(ShapeHeight * 4) / 2} />
          <use
            href="#per2_1"
            x={(ShapeWidth * 7) / 2}
            y={(ShapeHeight * 4) / 2}
          />
          <use
            href="#per2_1"
            x={(ShapeWidth * 8) / 2}
            y={(ShapeHeight * 4) / 2}
          />

          <use href="#per2_1" x={0} y={(ShapeHeight * 6) / 2} />
          <use href="#per2_1" x={ShapeWidth} y={(ShapeHeight * 6) / 2} />
          <use
            href="#per2_1"
            x={(ShapeWidth * 3) / 2}
            y={(ShapeHeight * 6) / 2}
          />
          <use
            href="#per2_1"
            x={(ShapeWidth * 5) / 2}
            y={(ShapeHeight * 6) / 2}
          />
          <use
            href="#per2_1"
            x={(ShapeWidth * 7) / 2}
            y={(ShapeHeight * 6) / 2}
          />
          <use
            href="#per2_1"
            x={(ShapeWidth * 8) / 2}
            y={(ShapeHeight * 6) / 2}
          />

          <use href="#per2_1" x={0} y={(ShapeHeight * 8) / 2} />
          <use href="#per2_1" x={ShapeWidth} y={(ShapeHeight * 8) / 2} />
          <use
            href="#per2_1"
            x={(ShapeWidth * 3) / 2}
            y={(ShapeHeight * 8) / 2}
          />
          <use
            href="#per2_1"
            x={(ShapeWidth * 5) / 2}
            y={(ShapeHeight * 8) / 2}
          />
          <use
            href="#per2_1"
            x={(ShapeWidth * 7) / 2}
            y={(ShapeHeight * 8) / 2}
          />
          <use
            href="#per2_1"
            x={(ShapeWidth * 8) / 2}
            y={(ShapeHeight * 8) / 2}
          />
        </g>
      </defs>

      {Array.from({ length: Rows }).map((_, row) =>
        Array.from({ length: Cols }).map((_, col) => {
          const rotation = getRandomRotation()
          const startX = col * UnitWidth
          const startY = row * UnitHeight

          return (
            <g
              key={`${row}-${col}`}
              x={startX}
              y={startY}
              transform={`translate(${startX} ${startY})`}
            >
              <use
                href="#per2_1_unit"
                transform-origin={`${UnitWidth / 2} ${UnitHeight / 2}`}
                transform={`rotate(${rotation})`}
              />
            </g>
          )
        })
      )}
    </SVG>
  )
}

export default Triangle21

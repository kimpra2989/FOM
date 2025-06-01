import { svgProps } from '../constants'

export default function Per32Page() {
  const shapeWidth = 3
  const shapeHeight = 2.5
  const unitWidth = 20
  const unitHeight = 20
  const angles = [90, 180, -90]

  return (
    <svg {...svgProps} width={297 * 1.5} height={210 * 1.5}>
      <defs>
        <g id="per3_2">
          <path d="M1.49987 1.11777L2.32916 2.5H3L1.49987 0L0 2.5H0.670588L1.49987 1.11777Z" />
        </g>

        <g id="per3_2_shape">
          <use href="#per3_2" />

          {angles.map((angle) => (
            <use
              key={angle}
              href="#per3_2"
              transform={`rotate(${angle}, ${shapeWidth / 2}, ${
                shapeHeight + shapeWidth / 2
              })`}
            />
          ))}
        </g>
      </defs>

      <defs>
        <pattern
          id="per_3_2_p"
          width={unitWidth * 2}
          height={unitHeight * 2}
          patternUnits="userSpaceOnUse"
        >
          <use
            href="#per3_2_shape"
            x={unitWidth / 2 - shapeHeight / 2}
            y={unitHeight / 2 - shapeHeight / 2}
          />
          <use
            href="#per3_2_shape"
            x={unitWidth + unitWidth / 2 - shapeHeight / 2}
            y={unitHeight + unitHeight / 2 - shapeHeight / 2}
          />
        </pattern>
      </defs>

      <rect
        width={svgProps.width}
        height={svgProps.height}
        fill="url(#per_3_2_p)"
      />
    </svg>
  )
}

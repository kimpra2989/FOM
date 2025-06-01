import { svgProps } from '../constants'

export default function Per33Page() {
  const shapeWidth = 20
  const shapeHeight = 16
  const Gap = 8

  return (
    <svg {...svgProps} width={297 * 1.5} height={210 * 1.5}>
      <defs>
        <g id="per3_3">
          <path d="M9.19575 0.434339L0.14343 14.6005C-0.247401 15.2111 0.206649 16 0.948078 16C1.27569 16 1.58031 15.8367 1.75273 15.5657L9.58659 3.30395C9.77625 3.00696 10.2226 3.00696 10.4142 3.30395L18.2481 15.5657C18.4205 15.8348 18.7251 16 19.0527 16C19.7942 16 20.2463 15.2111 19.8574 14.6005L10.8051 0.434339C10.4353 -0.14478 9.56551 -0.14478 9.19575 0.434339Z" />
        </g>
      </defs>

      <defs>
        <pattern
          id="per3_3_line"
          width={shapeWidth * 2}
          height={shapeHeight * 2}
          patternUnits="userSpaceOnUse"
        >
          <use href="#per3_3" />
          <use
            href="#per3_3"
            transform={`rotate(180, ${shapeWidth} ,${shapeHeight})`}
          />
        </pattern>
      </defs>

      <defs>
        <pattern
          id="per3_3_p"
          width={shapeWidth * 2}
          height={shapeHeight * 4 + Gap * 2}
          patternUnits="userSpaceOnUse"
        >
          <rect
            width={svgProps.width}
            height={shapeHeight * 2}
            fill="url(#per3_3_line)"
          />

          <g transform={`translate(${-shapeWidth}, ${Gap})`}>
            <rect
              width={svgProps.width}
              height={shapeHeight * 2}
              x={0}
              y={shapeHeight * 2}
              fill="url(#per3_3_line)"
            />
          </g>
        </pattern>
      </defs>

      <rect
        width={svgProps.width}
        height={svgProps.height}
        fill="url(#per3_3_p)"
      />
    </svg>
  )
}

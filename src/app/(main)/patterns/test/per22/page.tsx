import { svgProps } from '../constants'

export default function Per22Page() {
  const Width = 17
  const Height = 40
  const tilt = 23

  return (
    <svg {...svgProps}>
      <defs>
        <g id="per1_3">
          <path
            d={`M 0 0
                L ${Width / 2} ${Height / 2}
                L 0 ${Height}
                Z`}
          />
          <path
            d={`M ${Width} 0
                L ${Width / 2} ${Height / 2}
                L ${Width} ${Height}
                Z`}
          />
        </g>
      </defs>

      <defs>
        <pattern
          id="per_2_3_p"
          width={Width * 2}
          height={Height * 2}
          patternUnits="userSpaceOnUse"
        >
          <use href="#per1_3" />
          <use href="#per1_3" x={Width} y={Height} />
        </pattern>
      </defs>

      <g
        transform-origin={`${(svgProps.width * 1.5) / 2} ${
          (svgProps.height * 1.5) / 2
        }`}
        transform={`rotate(${tilt}) 
        translate(${-Width}, ${-Height})
        `}
      >
        <rect
          width={svgProps.width * 1.5}
          height={svgProps.height * 1.5}
          fill="url(#per_2_3_p)"
        />
      </g>
    </svg>
  )
}

import { svgProps } from '../constants'

export default function Per31Page() {
  const Width = 20
  const Height = 20
  const a = 4.5

  return (
    <svg
      {...svgProps}
      width={svgProps.width * 1.5}
      height={svgProps.height * 1.5}
    >
      <defs>
        <g id="per3_1">
          <path
            opacity="0.46"
            d="M9.99997 12.8805L7.76404 10L0 20H4.47187L9.99997 12.8805Z"
          />
          <path
            opacity="0.46"
            d="M10 12.8805L15.5281 20H20L12.2359 10L10 12.8805Z"
          />
          <path
            opacity="0.46"
            d="M10 7.12142L12.2359 10L20 0H15.5281L10 7.12142Z"
          />
          <path
            opacity="0.46"
            d="M9.99997 7.12142L4.47187 0H0L7.76404 10L9.99997 7.12142Z"
          />
          <path d="M10.0001 12.8804L12.236 9.99992L10.0001 7.12134L7.76416 9.99992L10.0001 12.8804Z" />
        </g>
      </defs>

      <defs>
        <pattern
          id="per3_1_p"
          width={Width - a}
          height={Height}
          patternUnits="userSpaceOnUse"
        >
          <use href="#per3_1" />
          <use href="#per3_1" x={-Width + a} />
          <use href="#per3_1" x={Width - a} />
        </pattern>
      </defs>

      <rect
        width={svgProps.width}
        height={svgProps.height}
        fill="url(#per3_1_p)"
      />
    </svg>
  )
}

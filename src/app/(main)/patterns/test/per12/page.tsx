import { svgProps } from '../constants'

export default function Per12Page() {
  const Width = 20
  const Height = 16

  return (
    <svg {...svgProps}>
      <defs>
        <g id="per1_2">
          <path d="M9.99998 0L4.00063 16H0L9.99998 0Z" />
          <path opacity="0.37" d="M9.99983 0L7.99952 16H4.00049L9.99983 0Z" />
          <path d="M9.99983 0L12.0001 16H7.99951L9.99983 0Z" />
          <path opacity="0.37" d="M10 0L16.0009 16H12.0003L10 0Z" />
          <path d="M10 0L20 16H16.0009L10 0Z" />
        </g>

        <g id="per1_2_upsideDown">
          <use
            href="#per1_2"
            transform={`rotate(180, ${Width / 2} ${Height / 2})`}
          />
        </g>
      </defs>

      <defs>
        <pattern
          id="per_1_2_line"
          width={Width - Width / 5}
          height={Height * 2}
          viewBox={`${Width / 10} 0 ${(4 * Width) / 5} ${Height * 2}`}
          patternUnits="userSpaceOnUse"
        >
          <use href="#per1_2" x={0} y={0} />
          <use
            href="#per1_2_upsideDown"
            x={Width / 2 - Width / 5 / 2}
            y={Height}
          />
          <use
            href="#per1_2_upsideDown"
            x={-Width / 2 + Width / 5 / 2}
            y={Height}
          />
        </pattern>
      </defs>

      <rect
        width={svgProps.width}
        height={svgProps.height}
        fill="url(#per_1_2_line)"
      />
    </svg>
  )
}

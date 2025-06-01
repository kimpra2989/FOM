import { svgProps } from '../constants'

export default function Per11Page() {
  const Width = 18.28
  const Height = 14.75

  return (
    <svg {...svgProps} width={297 * 1.5} height={210 * 1.5}>
      <defs>
        <g id="per1_1">
          <path d="M9.14404 0V14.7575H18.2803L9.14404 0Z" opacity={0.37} />
          <path d="M9.14348 0L0 14.7575H9.14348V0Z" />
        </g>

        <g id="per1_1_upsideDown">
          <use
            href="#per1_1"
            transform-origin={`${Width / 2} ${Height / 2}`}
            transform="scale(1, -1)"
          />
        </g>

        <g id="per1_1_reverse">
          <use
            href="#per1_1"
            transform-origin={`${Width / 2} ${Height / 2}`}
            transform="scale(-1, 1)"
          />
        </g>

        <g id="per1_1_reverse_upsideDown">
          <use
            href="#per1_1_reverse"
            transform-origin={`${Width / 2} ${Height / 2}`}
            transform="scale(1, -1)"
          />
        </g>
      </defs>

      <defs>
        <pattern
          id="per1_1_p"
          width={Width}
          height={Height * 2}
          viewBox={`${Width / 2} 0 ${Width} ${Height * 2}`}
          patternUnits="userSpaceOnUse"
        >
          <use href="#per1_1" x={0} y={0} />
          <use href="#per1_1_upsideDown" x={Width / 2} y={0} />
          <use href="#per1_1" x={Width} y={0} />
          <use href="#per1_1_reverse" x={0} y={Height} />
          <use href="#per1_1_reverse_upsideDown" x={Width / 2} y={Height} />
          <use href="#per1_1_reverse" x={Width} y={Height} />
        </pattern>
      </defs>

      <rect
        width={svgProps.width}
        height={svgProps.height}
        fill="url(#per1_1_p)"
      />
    </svg>
  )
}

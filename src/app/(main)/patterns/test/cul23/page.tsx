import { svgProps } from '../constants'

export default function Cul23Page() {
  const Width = 37
  const Height = 18
  const opacity = 0.5

  return (
    <svg {...svgProps}>
      <defs>
        <g id="cul2_3">
          <path d="M17.396 0H0V4.4957H17.396V0Z" />
          <path d="M36.9999 0H35.9814V4.4957H36.9999V0Z" />
          <path d="M18.5033 4.50439H17.3892V9.00009H18.5033V4.50439Z" />
          <path d="M35.9812 4.50439H33.2266V9.00009H35.9812V4.50439Z" />
          <path d="M21.0735 9.0083H18.5034V13.504H21.0735V9.0083Z" />
          <path d="M33.2269 9.0083H31.9761V13.504H33.2269V9.0083Z" />
          <path d="M31.9756 13.5044H21.0801V18.0001H31.9756V13.5044Z" />
        </g>

        <g id="cul2_3_upsideDown">
          <use
            href="#cul2_3"
            transform-origin={`${Width / 2} ${Height / 2}`}
            transform="scale(1, -1)"
          />
        </g>
      </defs>

      <defs>
        <pattern
          id="cul2_3_p"
          width={Width * 2}
          height={Height}
          patternUnits="userSpaceOnUse"
        >
          <use href="#cul2_3" y={-Height / 2} opacity={opacity} />
          <use href="#cul2_3" />
          <use href="#cul2_3" y={Height / 2} />
          <use href="#cul2_3" y={Height} opacity={opacity} />
          <use href="#cul2_3" y={(3 * Height) / 2} />
          <use
            href="#cul2_3_upsideDown"
            x={Width}
            y={-Height / 4 - Height / 2}
            opacity={opacity}
          />
          <use href="#cul2_3_upsideDown" x={Width} y={-Height / 4} />
          <use
            href="#cul2_3_upsideDown"
            x={Width}
            y={-Height / 4 + Height / 2}
          />
          <use
            href="#cul2_3_upsideDown"
            x={Width}
            y={-Height / 4 + (2 * Height) / 2}
            opacity={opacity}
          />
          <use
            href="#cul2_3_upsideDown"
            x={Width}
            y={-Height / 4 + (3 * Height) / 2}
          />
          <use
            href="#cul2_3_upsideDown"
            x={Width}
            y={-Height / 4 + (4 * Height) / 2}
          />
        </pattern>
      </defs>

      <rect
        width={svgProps.width}
        height={svgProps.height}
        fill="url(#cul2_3_p)"
      />
    </svg>
  )
}

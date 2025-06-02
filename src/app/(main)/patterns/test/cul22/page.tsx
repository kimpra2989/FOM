import { svgProps } from '../constants'

export default function Cul22Page() {
  const Width = 20
  const Height = 20

  return (
    <svg {...svgProps}>
      <defs>
        <g id="cul2_2">
          <path d="M18.3566 10.2727L18.3315 20.0469L19.9998 20.0511L20.0248 10.277L18.3566 10.2727Z" />
          <path d="M16.6925 9.33985L16.6675 19.114L18.3357 19.1183L18.3608 9.34412L16.6925 9.33985Z" />
          <path d="M15.0299 8.40504L15.0049 18.1792L16.6731 18.1835L16.6982 8.40931L15.0299 8.40504Z" />
          <path d="M13.3654 7.47217L13.3403 17.2463L15.0086 17.2506L15.0336 7.47645L13.3654 7.47217Z" />
          <path d="M11.7013 6.53736L11.6763 16.3115L13.3445 16.3158L13.3696 6.54164L11.7013 6.53736Z" />
          <path d="M10.0368 5.6045L10.0117 15.3787L11.68 15.3829L11.705 5.60877L10.0368 5.6045Z" />
          <path d="M8.3727 4.66993L8.34766 14.4441L10.0159 14.4484L10.041 4.67421L8.3727 4.66993Z" />
          <path d="M6.70815 3.73682L6.68311 13.511L8.35136 13.5153L8.3764 3.7411L6.70815 3.73682Z" />
          <path d="M5.04409 2.80226L5.01904 12.5764L6.6873 12.5807L6.71235 2.80653L5.04409 2.80226Z" />
          <path d="M3.38002 1.86769L3.35498 11.6418L5.02323 11.6461L5.04828 1.87197L3.38002 1.86769Z" />
          <path d="M1.71547 0.934579L1.69043 10.7087L3.35869 10.713L3.38373 0.938854L1.71547 0.934579Z" />
          <path d="M0.0514112 1.48761e-05L0.0263672 9.77417L1.69462 9.77844L1.71967 0.00428939L0.0514112 1.48761e-05Z" />
        </g>

        <g id="cul2_2_reverse">
          <use
            href="#cul2_2"
            transform-origin={`${Width / 2} ${Height / 2}`}
            transform="scale(-1, 1)"
          />
        </g>
      </defs>

      <defs>
        <pattern
          id="cul2_2_p"
          width={Width * 2}
          height={Height}
          patternUnits="userSpaceOnUse"
        >
          <use href="#cul2_2" y={Height} />
          <use href="#cul2_2" />
          <use href="#cul2_2_reverse" x={Width} y={-Height / 2} />
          <use href="#cul2_2_reverse" x={Width} y={Height / 2} />
        </pattern>
      </defs>

      <rect
        width={svgProps.width}
        height={svgProps.height}
        fill="url(#cul2_2_p)"
      />
    </svg>
  )
}

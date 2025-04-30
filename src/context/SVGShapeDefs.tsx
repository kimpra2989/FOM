import { SHAPES } from '#/constants'

const SVGShapeDefs = () => (
  <svg width="0" height="0">
    <defs>
      <clipPath id="triangle">
        <path d={SHAPES.TRIANGLE} />
      </clipPath>

      <clipPath id="square">
        <path d={SHAPES.SQUARE} />
      </clipPath>

      <clipPath id="circle">
        <circle cx={50} cy={50} r={50} />
      </clipPath>
    </defs>
  </svg>
)

export default SVGShapeDefs

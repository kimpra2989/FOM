import { svgProps } from '../constants'

export default function Cul31Page() {
  const Width = 20
  const Height = 20
  const Rows = Math.ceil(svgProps.width / Width)
  const Cols = Math.ceil(svgProps.height / Height)

  return (
    <svg {...svgProps}>
      <defs>
        <g id="cul3_1">
          {[
            [1, 0],
            [3, 0],
            [0, 1],
            [2, 1],
            [1, 2],
            [3, 2],
            [0, 3],
            [2, 3],
          ].map(([x, y]) => (
            <rect
              x={(x * Width) / 4}
              y={(y * Height) / 4}
              width={Width / 4}
              height={Height / 4}
              key={`${x}_${y}`}
            />
          ))}
        </g>

        <rect id="black_box" width={Width} height={Height} />
        <rect id="white_box" width={Width} height={Height} opacity={0} />
      </defs>

      {Array.from({ length: Rows }).map((_, rowIdx) =>
        Array.from({ length: Cols }).map((_, colIdx) => {
          let tileIdx = (colIdx - rowIdx) % 4
          if (tileIdx < 0) tileIdx += 4

          let tileId
          if (tileIdx % 4 === 0) {
            tileId = 'black_box'
          } else if (tileIdx % 4 === 2) {
            tileId = 'white_box'
          } else {
            tileId = `cul3_1`
          }

          return (
            <use
              href={'#' + tileId}
              x={colIdx * Width}
              y={rowIdx * Height}
              key={`${rowIdx}_${colIdx}`}
            />
          )
        })
      )}
    </svg>
  )
}

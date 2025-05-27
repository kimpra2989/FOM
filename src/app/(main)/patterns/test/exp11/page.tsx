export default function Exp11Page() {
  const Rows = 4
  const Cols = 4
  const R = 10
  const points = Array.from({ length: Rows }, (_, row) =>
    Array.from({ length: Cols }, (_, col) => ({
      x: row * R,
      y: col * R,
      angle: Math.floor(Math.random() * 4) * 90,
    }))
  )

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox={`0 0 ${R * Rows} ${R * Cols}`}
    >
      <defs>
        <g
          id="exp1_1"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="-10 -10 20 20"
          fill="none"
        >
          <path
            d="M 0 -10
             L 0 0
             L 10 0
             A 10 10 0 0 0 0 -10"
            opacity="0.2"
            fill="black"
          />
          <path
            d="M 0 -10
             L 0 0
             L -10 0
             A 10 10 0 0 1 0 -10"
            opacity="0.4"
            fill="black"
          />
          <path
            d="M 0 10
             L 0 0
             L -10 0
             A 10 10 0 0 0 0 10"
            fill="black"
          />
          <path
            d="M 0 10
             L 0 0
             L 10 0
             A 10 10 0 0 1 0 10"
            fill="black"
            opacity="0"
          />
        </g>
      </defs>

      {points.map((row) =>
        row.map(({ x, y, angle }) => (
          <use
            href="#exp1_1"
            x={x}
            y={y}
            transform={`rotate(${angle} ${x} ${y})`}
            key={'' + x + y}
          />
        ))
      )}
    </svg>
  )
}

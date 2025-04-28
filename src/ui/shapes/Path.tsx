import { FC } from 'react'

interface Props {
  width?: number
  height?: number
  text?: string[]
  textX?: number
  textY?: number
  d: string
}

const Path: FC<Props> = ({
  width = 100,
  height = 100,
  text,
  textX = 50,
  textY = 50,
  d,
}) => {
  return (
    <svg width={width} height={height} viewBox="-0.5 -0.5 101 101">
      <path d={d} stroke="white" stroke-width="1" />
      <text
        fontSize={12}
        fontWeight="bold"
        x={textX}
        y={textY}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
      >
        {text?.map((line, idx) => (
          <tspan x="50" dy={12 * idx} key={idx}>
            {line}
          </tspan>
        ))}
      </text>
    </svg>
  )
}

export default Path

import { FC } from 'react'

export interface SVGTextProps {
  text?: string[]
  textX?: number
  textY?: number
  gap?: number
}

const Text: FC<SVGTextProps> = ({
  text = ['CREATE', 'FOM'],
  textX = 50,
  textY = 50,
  gap = 12,
}) => {
  return (
    <text
      fontSize={12}
      fontWeight="bold"
      x={textX}
      y={textY}
      textAnchor="middle"
      dominantBaseline="middle"
      fill="white"
    >
      {text.map((line, idx) => (
        <tspan x="50" dy={gap * idx} key={idx}>
          {line}
        </tspan>
      ))}
    </text>
  )
}

export default Text

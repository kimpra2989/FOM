import { FC } from 'react'

interface Props {
  text: string[]
  textX?: number
  textY?: number
}

const Circle: FC<Props> = ({ text, textX = 50, textY = 50 }) => {
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
        <tspan x="50" dy={12 * idx} key={idx}>
          {line}
        </tspan>
      ))}
    </text>
  )
}

export default Circle

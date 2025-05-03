import { FC } from 'react'

export interface SVGTextProps {
  text?: string[]
  textX: number | string
  textY: number | string
  lineHeight?: number
}

const Text: FC<SVGTextProps> = ({
  text = ['CREATE', 'FOM'],
  textX,
  textY,
  lineHeight = 20,
}) => {
  return (
    <text
      fontSize={16}
      fontWeight="800"
      x={textX}
      y={textY}
      textAnchor="middle"
      dominantBaseline="middle"
      fill="white"
    >
      {text.map((line, idx) => (
        <tspan x={textX} dy={lineHeight * idx} key={idx}>
          {line}
        </tspan>
      ))}
    </text>
  )
}

export default Text

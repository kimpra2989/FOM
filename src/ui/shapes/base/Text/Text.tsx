import { FC } from 'react'
import { textStyles } from './text.css'

export interface SVGTextProps {
  text?: string[]
  textX: number | string
  textY: number | string
  lineHeight?: number
}

const Text: FC<SVGTextProps> = ({ textX, textY, lineHeight = 20 }) => {
  const text = ['CREATE', 'FOM']

  return (
    <text
      fontSize={16}
      fontWeight="800"
      x={textX}
      y={textY}
      textAnchor="middle"
      dominantBaseline="middle"
      fill="white"
      className={textStyles}
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

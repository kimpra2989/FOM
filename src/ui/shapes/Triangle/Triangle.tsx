import { FC } from 'react'
import { Text } from '../base'
import { triangleStyle } from './triangle.css'

interface Props {
  length?: number
  text?: string[]
  image?: string
}

const Triangle: FC<Props> = ({ length = 138, text, image }) => {
  const STROKE = 1
  const width = length
  const height = length * 0.866

  return image ? (
    // image가 없는 경우 (border O)
    <img src={image} className={triangleStyle} />
  ) : (
    // image가 있는 경우 (border X)
    <svg
      width={width}
      height={height} // * r3 / 2
      viewBox={`-0.5 0 ${width} ${height + STROKE / 2}`}
    >
      <path
        d={`M ${width / 2} 0
          L ${width} ${height}
          L 0 ${height} 
          Z`}
        stroke="white"
        strokeWidth={STROKE}
      />

      <Text text={text} textX={'50%'} textY={'63%'} />
    </svg>
  )
}

export default Triangle

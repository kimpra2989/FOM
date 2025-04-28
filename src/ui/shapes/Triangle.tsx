import { FC } from 'react'
import { Path } from './base'

interface Props {
  width?: number
  height?: number
  text?: string[]
}

const Triangle: FC<Props> = ({ width, height, text }) => {
  return (
    <Path
      width={width}
      height={height}
      text={text}
      textY={70}
      d="M 50 13.397 
         L 100 100
         L 0 100
         Z"
    />
  )
}

export default Triangle

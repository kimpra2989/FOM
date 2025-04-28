import { FC } from 'react'
import Path from './Path'

interface Props {
  width?: number
  height?: number
  text?: string[]
}

const Square: FC<Props> = ({ width, height, text }) => {
  return (
    <Path
      width={width}
      height={height}
      text={text}
      d="M 0 0
         L 100 0
         L 100 100
         L 0 100
         Z"
    />
  )
}

export default Square

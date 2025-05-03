import { FC } from 'react'
import { innerImage, withImage, withText } from './square.css'

interface Props {
  text?: string[]
  image?: string
}

const Square: FC<Props> = ({ text, image }) => {
  return image ? (
    <div className={withImage}>
      <img src={image} className={innerImage} />
    </div>
  ) : (
    <div className={withText}>
      CREATE
      <br />
      FOM
    </div>
  )
}

export default Square

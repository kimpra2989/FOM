import { FC } from 'react'
import { innerImage, withImage, withText } from './square.css'

interface Props {
  image?: string
}

const Square: FC<Props> = ({ image }) => {
  return image ? (
    <div className={withImage}>
      <img src={image} className={innerImage} draggable={false} />
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

import { FC } from 'react'
import { innerImage, withImage, withText } from './circle.css'

interface Props {
  image?: string
}

const Circle: FC<Props> = ({ image }) => {
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

export default Circle

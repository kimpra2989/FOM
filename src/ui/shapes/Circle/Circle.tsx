import { FC } from 'react'
import { innerImage, withImage, withText } from './circle.css'

interface Props {
  text?: string[]
  image?: string
}

const Circle: FC<Props> = ({ text, image }) => {
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

export default Circle

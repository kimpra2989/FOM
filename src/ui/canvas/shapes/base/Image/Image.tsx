import { ImageConfig } from 'konva/lib/shapes/Image'
import { FC } from 'react'
import { Image } from 'react-konva'
import useImage from 'use-image'

interface Props extends Omit<ImageConfig, 'image'> {
  x: number
  y: number
  imageUrl: string
}

const InnerImage: FC<Props> = ({ x, y, imageUrl, ...props }) => {
  const [innerImage] = useImage(imageUrl)

  return <Image x={x} y={y} image={innerImage} alt="pattern image" {...props} />
}

export default InnerImage

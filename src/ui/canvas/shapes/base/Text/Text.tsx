import { TextConfig } from 'konva/lib/shapes/Text'
import { FC } from 'react'
import { Text } from 'react-konva'
import { Shape } from '../../constants'

const InnerText: FC<TextConfig> = ({ ...props }) => {
  return <Text {...Shape.text} {...props} />
}

export default InnerText

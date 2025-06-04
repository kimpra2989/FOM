'use client'
import { useWindowSize } from '#/hooks'
import { Canvas, CanvasProps } from '@react-three/fiber'
import { CSSProperties, FC, ReactNode } from 'react'

interface Props extends CanvasProps {
  children?: ReactNode
  className?: string
  styles?: CSSProperties
}

const CanvasWrapper: FC<Props> = ({
  children,
  className,
  styles,
  ...props
}) => {
  const { size } = useWindowSize()

  if (size.width === 0 || size.height === 0) return null

  return (
    <div
      className={className}
      style={{
        ...{ width: `${size.width}px`, height: `${size.height - 60}px` },
        ...styles,
      }}
    >
      <Canvas {...props}>{children}</Canvas>
    </div>
  )
}

export default CanvasWrapper

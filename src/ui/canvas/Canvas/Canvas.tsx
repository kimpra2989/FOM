'use client'
import { Canvas } from '@react-three/fiber'
import { CSSProperties, FC, ReactNode } from 'react'

interface Props {
  width?: number
  height?: number
  cameraPos?: [number, number, number]
  children?: ReactNode
  className?: string
  styles?: CSSProperties
}

const CanvasWrapper: FC<Props> = ({
  width = window.innerWidth,
  height = window.innerHeight,
  cameraPos = [0, 0, 0.18],
  children,
  className,
  styles,
  ...props
}) => {
  return (
    <div
      className={className}
      style={{
        ...{ width: `${width}px`, height: `${height - 60}px` },
        ...styles,
      }}
    >
      <Canvas
        camera={{
          position: cameraPos,
          aspect: width / (height - 60),
        }}
        {...props}
      >
        {children}
      </Canvas>
    </div>
  )
}

export default CanvasWrapper

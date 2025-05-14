'use client'
import { Canvas } from '@react-three/fiber'
import { FC, ReactNode } from 'react'

interface Props {
  width?: number
  height?: number
  cameraPos?: [number, number, number]
  children?: ReactNode
  className?: string
}

const CanvasWrapper: FC<Props> = ({
  width = window.innerWidth,
  height = window.innerHeight,
  cameraPos = [0, 0, 0.15],
  children,
  className,
}) => {
  return (
    <div
      className={className}
      style={{ width: `${width}px`, height: `${height - 60}px` }}
    >
      <Canvas
        camera={{
          position: cameraPos,
          aspect: width / (height - 60),
        }}
      >
        {children}
      </Canvas>
    </div>
  )
}

export default CanvasWrapper

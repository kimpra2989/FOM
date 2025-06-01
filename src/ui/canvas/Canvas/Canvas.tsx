'use client'
import { Canvas, CanvasProps } from '@react-three/fiber'
import { CSSProperties, FC, ReactNode, useEffect, useState } from 'react'

interface Props extends CanvasProps {
  cameraPos?: [number, number, number]
  children?: ReactNode
  className?: string
  styles?: CSSProperties
}

const CanvasWrapper: FC<Props> = ({
  cameraPos = [0, 0, 0.18],
  children,
  className,
  styles,
  ...props
}) => {
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }
  }, [])
  
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

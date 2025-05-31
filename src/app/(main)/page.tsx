'use client'

import { useCursor } from '#/hooks/canvas'
import { fullScreen } from '#/styles/styles'
import { Square } from '#/ui'
import { Circle, Triangle } from '#/ui/canvas'
import Konva from 'konva'
import { useEffect, useRef, useState } from 'react'
import { Layer, Stage } from 'react-konva'
import { ShapeFilter } from './ui'

export default function Home() {
  // 도형 정보를 받아와서 필터 후 랜더
  // const shape = useAtomValue(circleFilterAtom)

  return (
    <main>
      <ShapeFilter />
      <ElasticGrid />
    </main>
  )
}

interface ShapeData {
  shape: string
  x: number
  y: number
}

const rowGap = 300
const colGap = 250

// const NUMBER = 2000

const generateShapes = (): ShapeData[] => {
  const res: ShapeData[] = []

  const Rows = 10
  const Cols = 10

  for (let r = -Rows / 2; r < Rows / 2; r++) {
    for (let c = -Cols; c < Cols / 2; c++) {
      const idx = r * Rows + c

      res.push({
        shape: ['triangle', 'square', 'circle'][idx % 3],
        x: r * rowGap,
        y: c * colGap,
      })
    }
  }

  return res
}

function ElasticGrid() {
  const stageRef = useRef<Konva.Stage>(null)
  const { cursor, handleMouseOut, handleMouseOver } = useCursor()

  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }
  }, [])

  return (
    <Stage
      className={fullScreen}
      width={width}
      height={height}
      ref={stageRef}
      draggable
      style={{ cursor }}
    >
      <Layer>
        {generateShapes().map((shape, idx) =>
          shape.shape === 'triangle' ? (
            <Triangle
              key={idx}
              x={shape.x}
              y={shape.y}
              handleMouseOut={handleMouseOut}
              handleMouseOver={handleMouseOver}
            />
          ) : shape.shape === 'circle' ? (
            <Circle
              key={idx}
              x={shape.x}
              y={shape.y}
              handleMouseOut={handleMouseOut}
              handleMouseOver={handleMouseOver}
            />
          ) : (
            <Square
              key={idx}
              x={shape.x}
              y={shape.y}
              handleMouseOut={handleMouseOut}
              handleMouseOver={handleMouseOver}
            />
          )
        )}
      </Layer>
    </Stage>
  )
}

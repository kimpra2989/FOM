'use client'

import { useWindowSize } from '#/hooks'
import { useCursor } from '#/hooks/canvas'
import { fullScreen } from '#/styles/styles'
import { Square } from '#/ui'
import { Circle, Triangle } from '#/ui/canvas'
import Konva from 'konva'
import { useEffect, useRef, useState } from 'react'
import { Layer, Stage } from 'react-konva'

export default function Home() {
  // 도형 정보를 받아와서 필터 후 랜더
  // const shape = useAtomValue(circleFilterAtom)

  return (
    <main>
      {/* <ShapeFilter /> */}
      <ElasticGrid />
    </main>
  )
}

interface ShapeData {
  shape: string
  x: number
  y: number
  imageIdx: number
}

// const rowGap = 300
// const colGap = 250

// const NUMBER = 2000
const pattern_count = 18

const generateShapes = (rowGap: number, colGap: number): ShapeData[] => {
  const res: ShapeData[] = []

  const Rows = 50
  const Cols = 50

  for (let r = -Rows / 2; r < Rows / 2; r++) {
    for (let c = -Cols; c < Cols / 2; c++) {
      res.push({
        shape: ['triangle', 'square', 'circle'][Math.floor(Math.random() * 3)],
        x: r * rowGap,
        y: c * colGap,
        imageIdx: Math.floor(Math.random() * (pattern_count + 1)),
      })
    }
  }

  return res
}

function ElasticGrid() {
  const stageRef = useRef<Konva.Stage>(null)
  const { cursor, handleMouseOut, handleMouseOver } = useCursor()
  const { size } = useWindowSize()
  const [shapes, setShapes] = useState<ShapeData[]>([])

  useEffect(() => {
    setShapes(generateShapes(size.width / 5, size.height / 3))
  }, [size.width, size.height])

  return (
    <Stage
      className={fullScreen}
      width={size.width}
      height={size.height}
      ref={stageRef}
      draggable
      style={{ cursor }}
    >
      <Layer>
        {shapes.map((shape, idx) =>
          shape.shape === 'triangle' ? (
            <Triangle
              imageUrl={
                shape.imageIdx === pattern_count
                  ? undefined
                  : `/patterns/pattern${shape.imageIdx}.svg`
              }
              key={idx}
              x={shape.x}
              y={shape.y}
              handleMouseOut={handleMouseOut}
              handleMouseOver={handleMouseOver}
            />
          ) : shape.shape === 'circle' ? (
            <Circle
              imageUrl={
                shape.imageIdx === pattern_count
                  ? undefined
                  : `/patterns/pattern${shape.imageIdx}.svg`
              }
              key={idx}
              x={shape.x}
              y={shape.y}
              handleMouseOut={handleMouseOut}
              handleMouseOver={handleMouseOver}
            />
          ) : (
            <Square
              imageUrl={
                shape.imageIdx === pattern_count
                  ? undefined
                  : `/patterns/pattern${shape.imageIdx}.svg`
              }
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

'use client'

import { circleFilterAtom } from '#/atoms'
import { Circle, ShapeFilter, Square, Triangle } from '#/ui'
import { useAtomValue } from 'jotai'
import { gridContainer } from './home.css'

export default function Home() {
  // 도형 정보를 받아와서 필터 후 랜더
  const shape = useAtomValue(circleFilterAtom)
  console.log('x', shape)

  return (
    <main>
      <ShapeFilter />
      <div className={gridContainer}>
        <Square />
        <Square image="/pattern1.png" />
        <Triangle />
        <Triangle image="/pattern1.png" />
        <Circle />
        <Circle image="/pattern1.png" />
        <Square />
        <Square image="/pattern1.png" />
        <Triangle />
        <Triangle image="/pattern1.png" />
        <Circle />
        <Circle image="/pattern1.png" />
        <Square />
        <Square image="/pattern1.png" />
        <Triangle />
        <Triangle image="/pattern1.png" />
        <Circle />
        <Circle image="/pattern1.png" />
      </div>
    </main>
  )
}

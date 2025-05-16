'use client'

import { circleFilterAtom } from '#/atoms'
import { ShapeFilter, Square } from '#/ui'
import { useAtomValue } from 'jotai'

export default function Home() {
  // 도형 정보를 받아와서 필터 후 랜더
  const shape = useAtomValue(circleFilterAtom)
  console.log('x', shape)

  return (
    <main>
      <ShapeFilter />
      <div>
        <Square />
        <Square image="/pattern1.png" />
      </div>
    </main>
  )
}

'use client'

import { circleFilterAtom } from '#/atoms'
import { ShapeFilter } from '#/ui'
import { useAtomValue } from 'jotai'
import { layoutStyles } from './home.css'
import { InfiniteGrid } from './ui'

export default function Home() {
  // 도형 정보를 받아와서 필터 후 랜더
  const shape = useAtomValue(circleFilterAtom)
  console.log('x', shape)

  return (
    <main className={layoutStyles}>
      <ShapeFilter />
      <InfiniteGrid />
    </main>
  )
}

'use client'

import { circleFilterAtom } from '#/atoms'
import { Square } from '#/ui'
import { useAtomValue } from 'jotai'
import Link from 'next/link'
import { ShapeFilter } from './ui'

export default function Home() {
  // 도형 정보를 받아와서 필터 후 랜더
  const shape = useAtomValue(circleFilterAtom)
  console.log('x', shape)

  return (
    <main>
      <ShapeFilter />
      <div>
        <Link href={'/patterns/create/test'}>색상 추출기</Link>
        <Square />
        <Square image="/pattern1.png" />
      </div>
    </main>
  )
}

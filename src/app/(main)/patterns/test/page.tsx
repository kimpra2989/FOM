'use client'

import Link from 'next/link'
import { container } from './page.css'

export default function Test2Page() {
  return (
    <div className={container}>
      <Link href={'./test/exp11'}>경험 1 - 1</Link>
      <Link href={'./test/exp12'}>경험 1 - 2</Link>
      <Link href={'./test/exp13'}>경험 1 - 3</Link>
      <Link href={'./test/exp21'}>경험 2 - 1</Link>
      <Link href={'./test/exp22'}>경험 2 - 2</Link>
      <Link href={'./test/exp23'}>경험 2 - 3</Link>
      <Link href={'./test/exp31'}>경험 3 - 1</Link>
      <Link href={'./test/exp32'}>경험 3 - 2</Link>
      <Link href={'./test/exp33'}>경험 3 - 3</Link>
    </div>
  )
}

import { FC } from 'react'
import { container } from './sidebar.css'
import Link from 'next/link'

interface Props {
  isOpen: boolean
}

const Sidebar: FC<Props> = ({ isOpen }) => {
  return (
    <aside className={container({ status: isOpen ? 'open' : 'close' })}>
      <Link href="/introduction">캐릭터 소개 페이지로 이동</Link>
      <div>외 기타 등등 추가 예정</div>
    </aside>
  )
}

export default Sidebar

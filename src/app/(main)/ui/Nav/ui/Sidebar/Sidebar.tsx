import Link from 'next/link'
import { FC } from 'react'
import { container, linkItem } from './sidebar.css'

interface Props {
  isOpen: boolean
}

const Sidebar: FC<Props> = ({ isOpen }) => {
  const links: { displayName: string; href: string }[] = [
    { displayName: 'CHARACTER', href: 'introduction/character' },
    { displayName: 'BRAND', href: 'brand' },
    { displayName: 'BASIC SHAPE', href: 'introduction/shape' },
    { displayName: 'SHOP', href: 'shop' },
  ]

  return (
    <aside className={container({ status: isOpen ? 'open' : 'close' })}>
      {links.map(({ displayName, href }) => (
        <Link href={`/${href}`} className={linkItem} key={displayName}>
          {displayName}
        </Link>
      ))}
    </aside>
  )
}

export default Sidebar

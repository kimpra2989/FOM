import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import { container, linkContainer, linkItem, logo } from './sideNav.css'

interface Props {
  isOpen: boolean
}

const SideNav: FC<Props> = ({ isOpen }) => {
  const currentPathname = usePathname()
  const isActive = (href: string) => currentPathname.slice(1).startsWith(href)

  const links: { displayName: string; href: string }[] = [
    { displayName: 'CHARACTER', href: 'introduction/character' },
    { displayName: 'BRAND', href: 'brand' },
    { displayName: 'BASIC SHAPE', href: 'introduction/shape' },
    { displayName: 'SHOP', href: 'shop' },
  ]

  return (
    <aside className={container({ status: isOpen ? 'open' : 'close' })}>
      <div className={logo} />

      <div className={linkContainer}>
        {links.map(({ displayName, href }) => (
          <Link
            href={`/${href}`}
            className={linkItem({
              background: isActive(href) ? 'active' : undefined,
            })}
            key={displayName}
          >
            {displayName}
          </Link>
        ))}
      </div>
    </aside>
  )
}

export default SideNav

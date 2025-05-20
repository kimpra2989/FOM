import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { container, linkContainer, linkItem, logo } from './sideNav.css'

const SideNav = () => {
  const currentPathname = usePathname()
  const isActive = (href: string) => currentPathname.slice(1).startsWith(href)

  const links: { displayName: string; href: string }[] = [
    { displayName: 'CHARACTER', href: 'introduction/character' },
    { displayName: 'BRAND', href: 'brand' },
    { displayName: 'BASIC SHAPE', href: 'introduction/shape' },
    { displayName: 'SHOP', href: 'shop' },
  ]

  return (
    <nav className={container}>
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
    </nav>
  )
}

export default SideNav

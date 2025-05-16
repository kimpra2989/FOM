import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { container, linkContainer, linkItem, logo } from './sideNav.css'

const SideNav = () => {
  const currentPathname = usePathname()
  const selected = (pathname: string) =>
    currentPathname.split('/')[1] === pathname

  const links: { displayName: string; pathname: string }[] = [
    { displayName: 'CHARACTER', pathname: 'character' },
    { displayName: 'BRAND', pathname: 'brand' },
    { displayName: 'BASIC SHAPE', pathname: 'introduction' },
    { displayName: 'SHOP', pathname: 'shop' },
  ]

  return (
    <nav className={container}>
      <div className={logo} />

      <div className={linkContainer}>
        {links.map(({ displayName, pathname }) => (
          <Link
            href={`/${pathname}`}
            className={linkItem({
              background: selected(pathname) ? 'selected' : undefined,
            })}
            key={pathname}
          >
            {displayName}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default SideNav

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, MouseEventHandler } from 'react'
import {
  container,
  imageStyle,
  linkContainer,
  linkItem,
  logo,
} from './sideNav.css'

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

  const notReady = ['BRAND', 'BASIC SHAPE', 'SHOP']

  const preventNotReadyLink: (
    name: string
  ) => MouseEventHandler<HTMLAnchorElement> = (name) => (e) => {
    if (!notReady.includes(name)) return

    e.preventDefault()
    alert('아직 준비 중이에요! 다음에 다시 찾아주세요!')
  }

  return (
    <aside className={container({ status: isOpen ? 'open' : 'close' })}>
      <Image
        className={logo}
        src={'/character.svg'}
        width={31}
        height={34}
        alt="logo image"
      />

      <Image
        className={imageStyle}
        src={'/fom_front.png'}
        width={300}
        height={300}
        alt="character image"
      />

      <div className={linkContainer}>
        {links.map(({ displayName, href }) => (
          <Link
            onClick={preventNotReadyLink(displayName)}
            key={displayName}
            href={`/${href}`}
            className={linkItem({
              isActive: isActive(href) ? 'active' : undefined,
            })}
          >
            {displayName}
          </Link>
        ))}
      </div>
    </aside>
  )
}

export default SideNav

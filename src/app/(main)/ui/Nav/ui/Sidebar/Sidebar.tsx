import Image from 'next/image'
import Link from 'next/link'
import { FC, MouseEventHandler } from 'react'
import { container, linkItem, logo } from './sidebar.css'

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
        src={'/fom_front.png'}
        width={300}
        height={300}
        alt="character image"
      />

      {links.map(({ displayName, href }) => (
        <Link
          onClick={preventNotReadyLink(displayName)}
          href={`/${href}`}
          className={linkItem}
          key={displayName}
        >
          {displayName}
        </Link>
      ))}
    </aside>
  )
}

export default Sidebar

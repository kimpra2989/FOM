import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { asideOpenButton, navContainer } from './topNav.css'

interface Props {
  onLeftButtonClick: () => void
}

const TopNav: FC<Props> = ({ onLeftButtonClick }) => {
  return (
    <nav className={navContainer}>
      <button
        onClick={onLeftButtonClick}
        className={asideOpenButton}
        name="openSidebar"
      >
        <Image
          src={'/character.svg'}
          width={31}
          height={34}
          alt="open side nav"
        />
      </button>

      <Link href="/">
        <Image src={'/logo.svg'} width={51} height={17} alt="go to home" />
      </Link>

      <div className={asideOpenButton} />
    </nav>
  )
}

export default TopNav

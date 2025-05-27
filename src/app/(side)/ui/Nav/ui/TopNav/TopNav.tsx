import Link from 'next/link'
import { FC } from 'react'
import { asideOpenButton, navContainer, navTitle } from './topNav.css'

interface Props {
  onLeftButtonClick: () => void
}

const TopNav: FC<Props> = ({ onLeftButtonClick }) => {
  return (
    <nav className={navContainer}>
      <button onClick={onLeftButtonClick} className={asideOpenButton} />

      <Link href="/" className={navTitle}>
        FOM
      </Link>

      <div style={{ width: '24px', height: '24px' }} />
    </nav>
  )
}

export default TopNav

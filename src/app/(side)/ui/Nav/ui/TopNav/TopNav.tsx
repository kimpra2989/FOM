import Link from 'next/link'
import { navContainer, navTitle } from './topNav.css'

const TopNav = () => {
  return (
    <nav className={navContainer}>
      <Link href="/" className={navTitle}>
        FOM
      </Link>
    </nav>
  )
}

export default TopNav

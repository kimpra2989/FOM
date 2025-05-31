'use client'

import { useSidebarStatus } from '#/hooks/nav'
import Image from 'next/image'
import Link from 'next/link'
import { asideOpenButton, navContainer } from './nav.css'
import { Sidebar } from './ui/Sidebar'

const Nav = () => {
  const { isSidebarOpen, openSidebar } = useSidebarStatus()

  return (
    <>
      <nav className={navContainer}>
        <button
          onClick={openSidebar}
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

      <Sidebar isOpen={isSidebarOpen} />
    </>
  )
}

export default Nav

'use client'

import Image from 'next/image'
import { useSidebarStatus } from './hooks'
import { asideOpenButton, navContainer } from './nav.css'
import { Sidebar } from './ui/Sidebar'

const Nav = () => {
  const { isSidebarOpen, openSidebar } = useSidebarStatus()

  return (
    <>
      <nav className={navContainer}>
        <button onClick={openSidebar} className={asideOpenButton}>
          <Image
            alt="open side menu"
            src={'/logo.svg'}
            width={24}
            height={24}
          />
        </button>

        <span>FOM</span>

        <div />
      </nav>

      <Sidebar isOpen={isSidebarOpen} />
    </>
  )
}

export default Nav

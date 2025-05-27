'use client'

import { useSidebarStatus } from '#/hooks/nav'
import Link from 'next/link'
import { asideOpenButton, navContainer, navTitle } from './nav.css'
import { Sidebar } from './ui/Sidebar'

const Nav = () => {
  const { isSidebarOpen, openSidebar } = useSidebarStatus()

  return (
    <>
      <nav className={navContainer}>
        <button onClick={openSidebar} className={asideOpenButton} />

        <Link href="/" className={navTitle}>
          FOM
        </Link>

        <div style={{ width: '24px', height: '24px' }} />
      </nav>

      <Sidebar isOpen={isSidebarOpen} />
    </>
  )
}

export default Nav

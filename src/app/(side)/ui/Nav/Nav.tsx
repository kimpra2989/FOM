'use client'

import { useSidebarStatus } from '#/hooks/nav'
import { SideNav, TopNav } from './ui'

const Nav = () => {
  const { isSidebarOpen, openSidebar } = useSidebarStatus()

  return (
    <>
      <TopNav onLeftButtonClick={openSidebar} />
      <SideNav isOpen={isSidebarOpen} />
    </>
  )
}

export default Nav

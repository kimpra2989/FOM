'use client'

import { ZIndex } from '#/styles/vars'
import Image from 'next/image'
import { useState } from 'react'
import { asideOpenButton, navContainer } from './nav.css'

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      <nav className={navContainer}>
        <button
          onClick={() => setIsSidebarOpen(true)}
          className={asideOpenButton}
        >
          <Image
            alt="open side menu"
            src={'/logo.svg'}
            width={24}
            height={24}
          />
        </button>

        <span>FOM</span>

        <div></div>
      </nav>

      {isSidebarOpen && (
        <aside
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '250px',
            height: '100vh',
            backgroundColor: '#555',
            color: '#fff',
            padding: '60px 20px 20px',
            zIndex: ZIndex.ASIDE,
          }}
        >
          사이드 ui
        </aside>
      )}
    </>
  )
}

export default Nav

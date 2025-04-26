import { useEffect, useState } from 'react'

function useSidebarStatus() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const openSidebar = setIsSidebarOpen.bind(null, true)
  const closeSidebar = setIsSidebarOpen.bind(null, false)

  useEffect(() => {
    if (!isSidebarOpen) return

    const closeSidebar = (e: MouseEvent) => {
      if (e.target instanceof HTMLImageElement) return
      if (e.target instanceof HTMLElement && e.target.tagName !== 'ASIDE') {
        setIsSidebarOpen(false)
      }
    }

    window.addEventListener('click', closeSidebar)

    return () => {
      window.removeEventListener('click', closeSidebar)
    }
  }, [isSidebarOpen])

  return {
    isSidebarOpen,
    openSidebar,
    closeSidebar,
  }
}

export default useSidebarStatus

import { useEffect, useState } from 'react'

function useSidebarStatus() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const openSidebar = setIsSidebarOpen.bind(null, true)
  const closeSidebar = setIsSidebarOpen.bind(null, false)

  useEffect(() => {
    if (!isSidebarOpen) return

    const closeSidebar = (e: MouseEvent) => {
      const { target } = e
      if (
        target instanceof HTMLElement &&
        (target.tagName === 'ASIDE' ||
          target.closest('button[name="openSidebar"]') ||
          target.closest('aside'))
      ) {
        return
      }
      setIsSidebarOpen(false)
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

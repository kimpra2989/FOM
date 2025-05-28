import { useEffect } from 'react'

export const useBeforeUnload = () => {
  // TODO: 다른 페이지로 이동하는 경우 추가해야함
  
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault()
      e.returnValue = ''
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  useEffect(() => {
    const handlePopState = () => {
      if (!window.confirm('정말 나가시겠습니까? 답변은 저장되지 않습니다.')) {
        history.pushState(null, '', location.href)
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])
}

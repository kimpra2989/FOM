import { useRouter } from 'next/navigation'

function useRoute() {
  const navigate = useRouter()
  const goto = (url: string) => () => {
    navigate.push(url)
  }

  return { goto }
}

export default useRoute

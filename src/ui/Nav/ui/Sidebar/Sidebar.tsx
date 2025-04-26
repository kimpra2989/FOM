import { FC } from 'react'
import { container } from './sidebar.css'

interface Props {
  isOpen: boolean
}

const Sidebar: FC<Props> = ({ isOpen }) => {
  return (
    <aside className={container({ status: isOpen ? 'open' : 'close' })}>
      사이드 ui
    </aside>
  )
}

export default Sidebar

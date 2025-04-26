import Link from 'next/link'
import { linkStyle } from './home.css'

export default function Home() {
  return (
    <Link href={'./patterns/create'} className={linkStyle}>
      create FOM
    </Link>
  )
}

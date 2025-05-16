import { container } from './layout.css'
import { Nav } from './ui'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Nav />
      <main className={container}>{children}</main>
    </>
  )
}

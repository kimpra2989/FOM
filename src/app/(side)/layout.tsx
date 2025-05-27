import { Nav } from './ui'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}

import './reset.css'
import './globals.css'
import { Nav } from '#/ui'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="kr">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}

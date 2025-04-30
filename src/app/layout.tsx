import { SVGShapeDefs } from '#/context'
import { Nav } from '#/ui'
import './reset.css'
import './app.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="kr">
      <body>
        <Nav />
        <SVGShapeDefs />
        {children}
      </body>
    </html>
  )
}

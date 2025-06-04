import './reset.css'
import './global.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="kr">
      <link
        rel="preload"
        href="/fonts/PretendardVariable.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <body>{children}</body>
    </html>
  )
}

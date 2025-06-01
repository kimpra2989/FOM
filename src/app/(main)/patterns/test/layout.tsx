export default function PatternLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div
      style={{
        backgroundColor: 'white',
        color: 'black',
        width: '100%',
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  )
}

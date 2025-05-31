import { CSSProperties, useState } from 'react'

const useCursor = () => {
  const [cursor, setCursor] = useState<CSSProperties['cursor']>('default')
  const handleMouseOver = () => {
    setCursor('url(/cursor.png), auto')
  }

  const handleMouseOut = () => {
    setCursor('default')
  }

  return {
    cursor,
    handleMouseOver,
    handleMouseOut,
  }
}

export default useCursor

import { Color, NavHeight } from '#/styles'
import { globalFontFace, globalStyle } from '@vanilla-extract/css'

globalFontFace('Pretendard Variable', {
  src: 'url(/fonts/PretendardVariable.woff2) format("woff2")',
  fontWeight: '200 800',
  fontStyle: 'normal',
  fontDisplay: 'swap',
})

globalStyle('html, body', {
  margin: 0,
  width: '100vw',
  height: '100vh',
  position: 'relative',
  maxWidth: '100vw',
  overflowX: 'hidden',
  color: Color.WHITE,
  backgroundColor: Color.BLACK,
  fontFamily: `'Pretendard Variable', sans-serif`,
})

globalStyle('body', {
  paddingTop: NavHeight,
  scrollbarWidth: 'none',
})

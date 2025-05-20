import { Color, NavHeight } from '#/styles'
import { globalStyle } from '@vanilla-extract/css'

globalStyle('html, body', {
  margin: 0,
  width: '100vw',
  height: '100vh',
  position: 'relative',
  maxWidth: '100vw',
  overflowX: 'hidden',
  color: Color.WHITE,
  backgroundColor: Color.BLACK,
})

globalStyle('body', {
  paddingTop: NavHeight,
  scrollbarWidth: 'none',
})

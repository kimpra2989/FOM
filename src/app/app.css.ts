import { Color, NavHeight } from '#/styles'
import { globalStyle } from '@vanilla-extract/css'

globalStyle('html, body', {
  margin: 0,
  width: '100vw',
  height: `calc(100vh - ${NavHeight})`,
  position: 'relative',
  maxWidth: '100vw',
  overflowX: 'hidden',
  backgroundColor: Color.BLACK,
})

globalStyle('body', {
  marginTop: NavHeight,
})

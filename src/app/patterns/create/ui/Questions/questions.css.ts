// carousel.css.ts
import { createVar, style } from '@vanilla-extract/css'

// 변수 정의
export const slideHeight = createVar()
export const slideSpacing = createVar()
export const slideSize = createVar()

// 메인 컨테이너 스타일
export const embla = style({
  height: '100%',
  vars: {
    [slideSpacing]: '2rem',
    [slideSize]: '100%',
  },
})

// Viewport 스타일
export const emblaViewport = style({
  height: '100%',
  overflow: 'hidden',
})

// 슬라이드 컨테이너 스타일
export const emblaContainer = style({
  display: 'flex',
  touchAction: 'pan-x pinch-zoom',
  marginTop: `calc(${slideSpacing} * -1)`,
  height: '100%',
  flexDirection: 'column',
})

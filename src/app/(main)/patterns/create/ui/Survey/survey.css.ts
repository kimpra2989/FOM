// carousel.css.ts
import { Color } from '#/styles'
import { flexCenter } from '#/utils/styles'
import { createVar, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

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

export const carouselCount = recipe({
  base: [
    flexCenter,
    {
      position: 'absolute',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
      userSelect: 'none',
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      paddingTop: '100px',
      zIndex: 10,
    },
  ],
  variants: {
    background: {
      Red: { backgroundColor: Color.RED },
      Green: { backgroundColor: Color.GREEN },
      Blue: { backgroundColor: Color.BLUE },
    },
  },
})

// 슬라이드 컨테이너 스타일
export const emblaContainer = style({
  display: 'flex',
  touchAction: 'pan-x pinch-zoom',
  marginTop: `calc(${slideSpacing} * -1)`,
  height: '100%',
  flexDirection: 'column',
})

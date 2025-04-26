import { Color } from '#/styles'
import { flexCenter } from '#/utils/styles'
import { createVar, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

// 변수 정의
export const slideSpacing = createVar()
export const slideSize = createVar()

// 개별 슬라이드 스타일
export const slideStyles = style([
  flexCenter,
  {
    vars: {
      [slideSpacing]: '40px',
      [slideSize]: '100%',
    },

    flexDirection: 'column',

    height: '100%',
    flex: `0 0 ${slideSize}`,
    paddingTop: slideSpacing,
  },
])

export const questionStyles = recipe({
  base: [
    flexCenter,
    {
      userSelect: 'none',
      maxWidth: '400px',
      height: '72px',
      padding: '0 16px',
      marginBottom: '48px',
      borderRadius: '77px',
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

export const answerContainerStyles = style([
  flexCenter,
  {
    gap: '20px',
  },
])

export const answerStyles = recipe({
  base: [
    flexCenter,
    {
      position: 'relative',
      color: 'black',
      width: '267px',
      height: '120px',
      borderRadius: '77px',
      border: `7px solid #FFF`,
      padding: '0 30px',
      background: '#B9B9B9',
      transition: 'transform .1s linear',
      userSelect: 'none',
      willChange: 'transform',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ':hover': {
        transform: 'scale(1.05)',
      },
    },
  ],
  variants: {
    borderColor: {
      Red: {
        selectors: {
          '&:has(input:checked)': {
            borderColor: Color.RED,
          },
        },
      },
      Green: {
        selectors: {
          '&:has(input:checked)': {
            borderColor: Color.GREEN,
          },
        },
      },
      Blue: {
        selectors: {
          '&:has(input:checked)': {
            borderColor: Color.BLUE,
          },
        },
      },
    },
  },
})

export const inputStyles = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  opacity: 0,
  cursor: "url('/cursor.png') 4 4, pointer",
})

'use client'

import { CheckBoxInput } from '#/ui'
import {
  circleStyles,
  filterStyles,
  squareStyles,
  triangleStyles,
} from './shapeFilter.css'
import useShapeFilter from './useShapeFilter'

const ShapeFilter = () => {
  const {
    circleChecked,
    triangleChecked,
    squareChecked,
    toggleCircleChecked,
    toggleTriangleChecked,
    toggleSquareChecked,
  } = useShapeFilter()

  return (
    <fieldset aria-label="도형 필터" className={filterStyles}>
      {/* TODO : 시간 되면 radio로 고치기 */}
      <CheckBoxInput
        label="원"
        checked={circleChecked}
        onChange={toggleCircleChecked}
      >
        <div className={circleStyles} />
      </CheckBoxInput>
      <CheckBoxInput
        label="삼각형"
        checked={triangleChecked}
        onChange={toggleTriangleChecked}
      >
        <div className={triangleStyles} />
      </CheckBoxInput>
      <CheckBoxInput
        label="사각형"
        checked={squareChecked}
        onChange={toggleSquareChecked}
      >
        <div className={squareStyles} />
      </CheckBoxInput>
    </fieldset>
  )
}

export default ShapeFilter

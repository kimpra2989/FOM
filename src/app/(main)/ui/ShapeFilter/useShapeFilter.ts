import { circleFilterAtom, squareFilterAtom, triangleFilterAtom } from '#/atoms'
import { useAtom } from 'jotai'

const useShapeFilter = () => {
  const [circleChecked, setCircleChecked] = useAtom(circleFilterAtom)
  const [triangleChecked, setTriangleChecked] = useAtom(triangleFilterAtom)
  const [squareChecked, setSquareChecked] = useAtom(squareFilterAtom)

  const uncheckAll = () => {
    setCircleChecked(false)
    setTriangleChecked(false)
    setSquareChecked(false)
  }

  const checkOne = (prev: boolean) => {
    if (prev) {
      return false
    }

    uncheckAll()
    return true
  }

  const toggleCircleChecked = () => setCircleChecked(checkOne)
  const toggleTriangleChecked = () => setTriangleChecked(checkOne)
  const toggleSquareChecked = () => setSquareChecked(checkOne)

  return {
    circleChecked,
    triangleChecked,
    squareChecked,
    toggleCircleChecked,
    toggleTriangleChecked,
    toggleSquareChecked,
  }
}

export default useShapeFilter

import { circleFilterAtom, squareFilterAtom, triangleFilterAtom } from '#/atoms'
import { useAtom } from 'jotai'

const useShapeFilter = () => {
  const [circleChecked, setCircleChecked] = useAtom(circleFilterAtom)
  const [triangleChecked, setTriangleChecked] = useAtom(triangleFilterAtom)
  const [squareChecked, setSquareChecked] = useAtom(squareFilterAtom)

  const toggleCircleChecked = () => setCircleChecked((prev) => !prev)
  const toggleTriangleChecked = () => setTriangleChecked((prev) => !prev)
  const toggleSquareChecked = () => setSquareChecked((prev) => !prev)

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

import { Circle, Square, Triangle } from '#/ui'
import { Html } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

const GridItems = () => {
  const rowGap = 240
  const colGap = 220

  const TrackCamera = () => {
    const size = useThree((state) => state.size)

    const camera = useThree((state) => state.camera)

    useFrame(() => {
      // console.log('camera position:', camera.position)
    })

    return null
  }

  return (
    <>
      <Html position={[0, 0, 0]} center>
        <Square image="/pattern1.png" />
      </Html>
      <Html position={[rowGap, 0, 0]} center>
        <Triangle image="/pattern1.png" />
      </Html>
      <Html position={[0, 0, colGap]} center>
        <Square />
      </Html>
      <Html position={[rowGap, 0, colGap]} center>
        <Circle />
      </Html>
    </>
  )
}

export default GridItems

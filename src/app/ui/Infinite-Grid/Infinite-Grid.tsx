import { SceneEnv } from '#/ui/canvas'
import { Canvas } from '@react-three/fiber'
import { GridItems } from './Grid-Items'

const InfiniteGrid = () => {
  return (
    <>
      <Canvas orthographic>
        <SceneEnv />
        <GridItems />
      </Canvas>
    </>
  )
}

export default InfiniteGrid

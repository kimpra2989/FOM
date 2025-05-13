import { Grid, OrbitControls, OrthographicCamera } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { CSSProperties, FC } from 'react'
import { MOUSE, TOUCH } from 'three'

interface Props {
  backgroundColor?: CSSProperties['backgroundColor']
  width?: number
  height?: number
}

const SceneEnv: FC<Props> = ({ backgroundColor, width, height }) => {
  const size = useThree((state) => state.size)

  const halfWidth = (width ?? size.width) / 2
  const halfHeight = (height ?? size.height) / 2
  const cameraHeight = 1000

  return (
    <>
      <OrthographicCamera
        makeDefault
        position={[0, cameraHeight, 0]}
        left={-1 * halfWidth}
        right={1 * halfWidth}
        top={1 * halfHeight}
        bottom={-1 * halfHeight}
        // zoom={1}
        // near={1}
        // far={1000}
      />
      <ambientLight />
      {/* TODO : black 대신 초기값으로 설정하기 */}
      <color attach="background" args={[backgroundColor ?? 'black']} />
      <OrbitControls
        makeDefault
        enableRotate={false} // 디버그 시 주석
        enableZoom={false}
        enableDamping={true}
        dampingFactor={0.05} // 관성
        enablePan={true}
        mouseButtons={{
          LEFT: MOUSE.PAN,
          RIGHT: MOUSE.ROTATE, // 디버그용
        }}
        touches={{
          ONE: TOUCH.PAN,
        }}
      />
      <Grid
        infiniteGrid
        cellSize={100}
        sectionSize={100}
        fadeDistance={cameraHeight + 1}
        fadeStrength={0}
        followCamera
      />
    </>
  )
}

export default SceneEnv

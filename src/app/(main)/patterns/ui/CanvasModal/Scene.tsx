import { useCharacter, useRenderTexture } from '#/hooks/canvas'
import { Center, Environment, OrbitControls } from '@react-three/drei'
import { FC } from 'react'

interface Props {
  textureUrl: string
}

const Scene: FC<Props> = ({ textureUrl }) => {
  const { scene, nodes } = useCharacter(`${process.env.NEXT_PUBLIC_STORAGE_URL}/fom.glb`
)
  const name = 'EAR003'
  useRenderTexture(nodes[name], textureUrl)

  return (
    <>
      <OrbitControls enableRotate enablePan={false} />
      <Environment preset="city" />
      <ambientLight />
      {/* <color attach="background" args={['#444']} /> */}
      <Center>
        <primitive object={scene} />
      </Center>
    </>
  )
}

export default Scene

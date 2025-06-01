import { useCharacter, useRenderTexture } from '#/hooks/canvas'
import { Center, Environment, OrbitControls } from '@react-three/drei'
import { FC } from 'react'

interface Props {
  textureUrl: string
}

const Scene: FC<Props> = ({ textureUrl }) => {
  const { scene, nodes } = useCharacter('https://pub-60bf2abb13364103818e899ac15c0e4b.r2.dev/fom_test.glb')
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

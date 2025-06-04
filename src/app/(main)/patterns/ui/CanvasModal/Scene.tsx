import { useCharacter, useRenderTexture } from '#/hooks/canvas'
import { Center, OrbitControls, Stage } from '@react-three/drei'
import { FC } from 'react'

interface Props {
  textureUrl: string
}

const Scene: FC<Props> = ({ textureUrl }) => {
  const { scene, nodes } = useCharacter(
    `${process.env.NEXT_PUBLIC_STORAGE_URL}/fom.glb`
  )
  const name = 'EAR003'
  useRenderTexture(nodes[name], textureUrl)

  return (
    <>
      <Stage
        environment="studio"
        intensity={1}
        shadows={true}
      />
      <OrbitControls enableRotate enablePan={false} minDistance={0.1} maxDistance={0.2} />
      <Center>
        <primitive object={scene} />
      </Center>
    </>
  )
}

export default Scene

'use client'

import { Character } from '#/ui/canvas'
import { Environment, OrbitControls } from '@react-three/drei'
import dynamic from 'next/dynamic'
const Canvas = dynamic(() => import('../../../../ui/canvas/Canvas/Canvas'), {
  ssr: false,
})

export default function CharacterPage() {
  return (
    <section>
      <Canvas>
        <OrbitControls enablePan enableRotate />
        <color attach="background" args={['#444']} />
        <Environment preset="city" />
        <ambientLight />
        <gridHelper />
        <axesHelper args={[100]} />
        <Character url="/fom_test.glb" />
      </Canvas>
    </section>
  )
}

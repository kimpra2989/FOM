'use client'

import { Canvas, Character } from '#/ui/canvas'
import { Environment, OrbitControls } from '@react-three/drei'
import { center } from './page.css'

export default function CharacterPage() {
  return (
    <main className={center}>
      <Canvas>
        <OrbitControls enablePan enableRotate />
        <color attach="background" args={['#444']} />
        <Environment preset="city" />
        <ambientLight />
        <gridHelper />
        <axesHelper args={[100]} />
        <Character url="/fom_test.glb" />
      </Canvas>
    </main>
  )
}

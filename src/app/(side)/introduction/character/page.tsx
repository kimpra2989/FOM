'use client'

import { Canvas, Character } from '#/ui/canvas'
import { OrbitControls, Stage } from '@react-three/drei'
import { useState } from 'react'

type Model = 'fom_test' | 'fom_figure' | 'fom_keyring' | 'fom_puzzle'

export default function CharacterPage() {
  const [model, setModel] = useState<Model>('fom_keyring')
  const handleClick = (model: Model) => {
    setModel(model)
  }

  return (
    <section>
      <div>
        <button onClick={() => handleClick('fom_figure')}>피규어</button>
        <button onClick={() => handleClick('fom_keyring')}>키링</button>
        <button onClick={() => handleClick('fom_puzzle')}>퍼즐</button>
      </div>

      <Canvas>
        <OrbitControls enablePan enableRotate />
        <Stage
          environment="studio" // or "city", "sunset", "dawn", "night" 등
          intensity={1}
          shadows={true}
        >
          {/* <Character url={`/models/${model}.glb`} /> */}
          <Character
            url={`https://pub-60bf2abb13364103818e899ac15c0e4b.r2.dev/${model}.glb`}
          />
        </Stage>
        {/* <color attach="background" args={['#444']} />
        <Environment preset="city" />
        <ambientLight /> */}
        <gridHelper />
        <axesHelper args={[100]} />
      </Canvas>
    </section>
  )
}

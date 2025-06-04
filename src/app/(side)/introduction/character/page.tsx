'use client'

import { Canvas, Character } from '#/ui/canvas'
import { OrbitControls, Stage, useGLTF } from '@react-three/drei'
import { useState } from 'react'

type Model = 'fom' | 'fom_figure' | 'fom_keyring' | 'fom_puzzle'

export default function CharacterPage() {
  const [model, setModel] = useState<Model>('fom')
  const handleClick = (model: Model) => {
    setModel(model)
  }

  useGLTF.preload(`${process.env.NEXT_PUBLIC_STORAGE_URL}/fom_figure.glb`)
  useGLTF.preload(`${process.env.NEXT_PUBLIC_STORAGE_URL}/fom_keyring.glb`)
  useGLTF.preload(`${process.env.NEXT_PUBLIC_STORAGE_URL}/fom_puzzle.glb`)

  return (
    <section>
      <div>
        <button onClick={() => handleClick('fom')}>캐릭터</button>
        <button onClick={() => handleClick('fom_figure')}>피규어</button>
        <button onClick={() => handleClick('fom_keyring')}>키링</button>
        <button onClick={() => handleClick('fom_puzzle')}>퍼즐</button>
      </div>

      <Canvas>
        <OrbitControls
          makeDefault
          enableRotate
          enablePan={false}
          // enableZoom={false}
        />

        <Stage
          environment="studio"
          intensity={0.7}
          shadows={true}
          // adjustCamera={false}
        >
          <Character
            url={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${model}.glb`}
          />
        </Stage>
        {/* <gridHelper />
        <axesHelper args={[100]} /> */}
      </Canvas>
    </section>
  )
}

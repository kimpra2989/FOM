'use client'

import { Canvas, useThree } from '@react-three/fiber'
import { useRef, useState } from 'react'
import * as THREE from 'three'

const GridItem = ({
  position,
  text,
}: {
  position: [number, number, number]
  text: string
}) => {
  return (
    <mesh position={position}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial color="white" />
      {/* Add text or texture here if needed */}
    </mesh>
  )
}

const GridLayer = () => {
  const groupRef = useRef<THREE.Group>(null)
  const { size, camera } = useThree()
  const [position, setPosition] = useState<[number, number]>([0, 0])

  // 마우스 드래그 감지
  // const bind = useDrag(({ offset: [x, y] }) => {
  //   const scale = 0.01 // 픽셀 → world 좌표 보정
  //   setPosition([x * scale, -y * scale])
  // })

  // 3x4로 반복되는 아이템
  const items = Array.from({ length: 36 }, (_, i) => {
    const col = i % 4
    const row = Math.floor(i / 4)
    return {
      id: i,
      position: [col * 1.2, -row * 1.2, 0] as [number, number, number],
      text: `Item ${i + 1}`,
    }
  })

  return (
    <group ref={groupRef} position={[position[0], position[1], 0]} >
      {items.map((item) => (
        <GridItem key={item.id} position={item.position} text={item.text} />
      ))}
    </group>
  )
}

export default function InfiniteGridCanvas() {
  return (
    <Canvas orthographic camera={{ zoom: 100, position: [0, 0, 100] }}>
      {/* <color attach="background" args={['#000']} /> */}
      <GridLayer />
    </Canvas>
  )
}

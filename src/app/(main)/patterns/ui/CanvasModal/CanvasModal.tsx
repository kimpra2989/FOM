'use client'

import { Canvas, Character } from '#/ui/canvas'
import { Environment, OrbitControls } from '@react-three/drei'
import { motion } from 'motion/react'
import { FC, MouseEventHandler } from 'react'
import { createPortal } from 'react-dom'
import { button, buttonWrapper, canvasStyle } from './canvas-modal.css'

interface Props {
  closeModal: MouseEventHandler
  nextPattern: () => Promise<void>
}

const CanvasModal: FC<Props> = ({ closeModal, nextPattern }) => {
  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={canvasStyle}
    >
      <Canvas
        gl={{ alpha: true }}
        height={window.innerHeight}
        styles={{ backgroundColor: 'transparent' }}
      >
        <OrbitControls enableRotate />
        <Environment preset="city" />
        <ambientLight />
        <Character url="/fom_test.glb" />
      </Canvas>
      <div className={buttonWrapper}>
        <button className={button} onClick={nextPattern}>
          다음
        </button>
        <button className={button} onClick={closeModal}>
          패턴 보기
        </button>
      </div>
    </motion.div>,
    document.body
  )
}

export default CanvasModal

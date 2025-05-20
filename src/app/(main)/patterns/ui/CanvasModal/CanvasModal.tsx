'use client'

import { Canvas } from '#/ui/canvas'
import { motion } from 'motion/react'
import { FC, MouseEventHandler } from 'react'
import { createPortal } from 'react-dom'
import { button, buttonWrapper, canvasStyle } from './canvas-modal.css'
import Scene from './Scene'

interface Props {
  closeModal: MouseEventHandler
  nextPattern: () => Promise<void>
  textureUrl: string
}

const CanvasModal: FC<Props> = ({ closeModal, nextPattern, textureUrl }) => {
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
        <Scene textureUrl={textureUrl} />
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

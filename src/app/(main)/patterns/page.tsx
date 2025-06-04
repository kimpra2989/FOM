'use client'

import { motion } from 'motion/react'
import { MouseEventHandler, useState } from 'react'
import { background, button, buttonWrapper, imageWrapper } from './page.css'
import CanvasModal from './ui/CanvasModal/CanvasModal'

export default function PatternPage() {
  const [patternIdx, setPatternIdx] = useState(0)
  const [isSwitching, setIsSwitching] = useState(false)
  const nextPattern = async () => {
    setIsSwitching(true)
    setTimeout(() => {
      setPatternIdx((prev) => (prev + 1) % 18)
      setIsSwitching(false)
    }, 500)
  }

  const [open, setOpen] = useState(false)
  const closeModal: MouseEventHandler = () => setOpen(false)

  return (
    <>
      <motion.main
        initial={{ clipPath: 'circle(100px at 50% 50%)' }}
        animate={{ clipPath: 'circle(150% at 50% 50%)' }}
        transition={{ duration: 8, ease: 'easeOut' }}
        className={imageWrapper}
      >
        {isSwitching && (
          <motion.div
            className={background}
            style={{
              backgroundImage: `url(/patterns/pattern${patternIdx}.svg)`,
              backgroundSize: '80%',
              zIndex: 3,
            }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
        <motion.div
          className={background}
          style={{
            backgroundImage: `url(/patterns/pattern${
              (patternIdx + (isSwitching ? 1 : 0)) % 4
            }.svg)`,
            backgroundSize: '80%',
          }}
        />
        {!open && (
          <div className={buttonWrapper}>
            <button className={button} onClick={nextPattern}>
              다음
            </button>
            <button
              className={button}
              onClick={() => {
                setOpen(true)
              }}
            >
              캐릭터 보기
            </button>
          </div>
        )}
      </motion.main>
      {open && (
        <CanvasModal
          closeModal={closeModal}
          nextPattern={nextPattern}
          textureUrl={`/patterns/pattern${patternIdx}.svg`}
        />
      )}
    </>
  )
}

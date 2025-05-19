'use client'

import { motion, useAnimation } from 'motion/react'
import { MouseEventHandler, useState } from 'react'
import { button, buttonWrapper, imageWrapper, innerImage } from './page.css'
import CanvasModal from './ui/CanvasModal/CanvasModal'

export default function PatternPage() {
  const [patternIdx, setPatternIdx] = useState(0)
  const controls = useAnimation()
  const nextPattern = async () => {
    await controls.start({
      filter: 'grayscale(100%)',
      transition: { duration: 0.5 },
    })

    setPatternIdx((prev) => (prev + 1) % 4)

    await controls.start({
      filter: 'grayscale(0%)',
      transition: { duration: 0 },
    })
  }

  const [open, setOpen] = useState(false)
  const closeModal: MouseEventHandler = () => setOpen(false)

  return (
    <>
      <motion.main
        initial={{ clipPath: 'circle(100px at 50% 50%)' }}
        animate={{ clipPath: 'circle(150% at 50% 50%)' }}
        transition={{ duration: 4, ease: 'easeOut' }}
        className={imageWrapper}
      >
        <motion.div
          animate={controls}
          initial={{ filter: 'grayscale(0%)' }}
          className={innerImage}
          style={{ backgroundImage: `url(/pattern${patternIdx}.png)` }}
        >
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
        </motion.div>
      </motion.main>
      {open && (
        <CanvasModal closeModal={closeModal} nextPattern={nextPattern} textureUrl={`/pattern${patternIdx}.png`} />
      )}
    </>
  )
}

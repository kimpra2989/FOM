'use client'

import { motion, useAnimation } from 'motion/react'
import { useState } from 'react'
import { imageWrapper, innerImage } from './page.css'

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

  return (
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
        <button onClick={nextPattern}>다음</button>
      </motion.div>
    </motion.main>
  )
}

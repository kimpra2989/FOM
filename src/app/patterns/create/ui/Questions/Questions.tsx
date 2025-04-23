'use client'

import { useState } from 'react'
import { useCarousel } from '../../hooks'
import { embla, emblaContainer, emblaViewport } from './questions.css'
import { Answers } from './types'

const Questions = () => {
  const [answers, setAnswers] = useState<Answers>(
    new Array(9).fill(null) as Answers
  )

  const slides = Array.from(Array(5).keys())
  const { ref, scrollNext, scrollPrev, scrollTo } = useCarousel()

  return (
    <section className={embla}>
      <div className={emblaViewport} ref={ref}>
        <div className={emblaContainer}>{/* question */}</div>
      </div>
    </section>
  )
}

export default Questions

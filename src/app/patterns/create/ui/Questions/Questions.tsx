'use client'

import { useState } from 'react'
import { questions } from '../../constants'
import { useCarousel } from '../../hooks'
import { Question } from './Question'
import { embla, emblaContainer, emblaViewport } from './questions.css'
import { Answers } from './types'

const Questions = () => {
  const [answers, setAnswers] = useState<Answers>(
    new Array(9).fill(null) as Answers
  )

  const qs = [questions.Blue1, questions.Green1, questions.Red1]
  const { ref, scrollNext, scrollPrev, scrollTo } = useCarousel()

  return (
    <section className={embla}>
      <div className={emblaViewport} ref={ref}>
        <div className={emblaContainer}>
          {qs.map((question, index) => (
            <Question scrollNext={scrollNext} {...question} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Questions

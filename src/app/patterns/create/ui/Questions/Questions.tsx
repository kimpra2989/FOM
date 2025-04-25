'use client'

import { useState } from 'react'
import { questions } from '../../constants'
import { useCarousel } from '../../hooks'
import { Question } from './Question'
import { embla, emblaContainer, emblaViewport } from './questions.css'
import { Answers } from './types'
import { produce } from 'immer'

const Questions = () => {
  // 응답 관리
  const [answers, setAnswers] = useState<Answers>(
    // TODO: 질문 문항수에 따른 확장 가능한 구조로 수정
    new Array(9).fill(null) as Answers
  )

  const setNthAnswer = (idx: number) => (value: number) => {
    setAnswers(
      produce((prevAnswer) => {
        prevAnswer[idx] = value
      })
    )
  }

  const qs = [questions.Blue1, questions.Green1, questions.Red1]
  const { ref, scrollNext, scrollPrev, scrollTo } = useCarousel()

  return (
    <section className={embla}>
      <div className={emblaViewport} ref={ref}>
        <div className={emblaContainer}>
          {qs.map((question, idx) => (
            <Question
              setAnswer={setNthAnswer(idx)}
              scrollNext={scrollNext}
              {...question}
              key={idx}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Questions

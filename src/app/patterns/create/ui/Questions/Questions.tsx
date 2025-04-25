'use client'

import { produce } from 'immer'
import { useState } from 'react'
import { questions as baseQuestions } from '../../constants'
import { useCarousel } from '../../hooks'
import { QuestionType } from '../../types'
import { Question } from './Question'
import { embla, emblaContainer, emblaViewport } from './questions.css'
import { AnswersType } from './types'

const Questions = () => {
  const Question_Count = 9

  // 응답 관리
  const [questions, setQuestions] = useState<QuestionType[]>(() => {
    const initialQuestion = new Array(Question_Count)
    initialQuestion[0] = baseQuestions.Red1
    initialQuestion[3] = baseQuestions.Green1
    initialQuestion[6] = baseQuestions.Blue1

    return initialQuestion
  })

  const [answers, setAnswers] = useState<AnswersType>(
    // TODO: 질문 문항수에 따른 확장 가능한 구조로 수정
    new Array(9).fill(null) as AnswersType
  )

  const setNthAnswer = (idx: number) => (value: number) => {
    setAnswers(
      produce((prevAnswer) => {
        prevAnswer[idx] = value
      })
    )

    // 추가 문항의 조작이 필요한 경우
    const setNextQuestionFromAnswer = (idx: number, value: number) => {
      setQuestions(
        produce((prevQuestion) => {
          prevQuestion[idx + 1] = baseQuestions.Red2[value]
        })
      )
    }

    if (idx % 3 === 0) {
      setNextQuestionFromAnswer(idx, value)
    }
  }

  const { ref, currentSlideIdx, scrollNext, scrollPrev, scrollTo } =
    useCarousel()

  return (
    <section className={embla}>
      {currentSlideIdx + '/' + Question_Count}
      <div className={emblaViewport} ref={ref}>
        <div className={emblaContainer}>
          {questions.map((question, idx) => (
            <Question
              questionColor={idx < 3 ? 'Red' : idx < 6 ? 'Green' : 'Blue'}
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

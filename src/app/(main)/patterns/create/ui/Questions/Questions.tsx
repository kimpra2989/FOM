'use client'

import { produce } from 'immer'
import { useState } from 'react'
import { questions as baseQuestions, commonQuestions } from '../../constants'
import { useCarousel } from '../../hooks'
import { QuestionType } from '../../types'
import { Question } from './Question'
import {
  carouselCount,
  embla,
  emblaContainer,
  emblaViewport,
} from './questions.css'
import { AnswersType } from './types'
import { Slider } from '#/ui'

const Questions = () => {
  const Question_Count = 9

  // 응답 관리
  const [questions, setQuestions] = useState<(QuestionType | string[])[]>([
    baseQuestions.Red1,
    baseQuestions.Red2[0],
    commonQuestions,
    baseQuestions.Green1,
    baseQuestions.Green2[0],
    commonQuestions,
    baseQuestions.Blue1,
    baseQuestions.Blue2[0],
    commonQuestions,
  ])

  // eslint-disable-next-line
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

  // eslint-disable-next-line
  const { ref, currentSlideIdx, scrollNext, scrollTo } = useCarousel()

  // TODO: 색상이 동기화 되지 않는 버그 수정
  const questionColor =
    currentSlideIdx < 3 ? 'Red' : currentSlideIdx < 6 ? 'Green' : 'Blue'

  return (
    <section className={embla}>
      <span className={carouselCount({ background: questionColor })}>
        {currentSlideIdx + 1 + ' / ' + Question_Count}
      </span>
      <div className={emblaViewport} ref={ref}>
        <div className={emblaContainer}>
          {questions.map((question, idx) =>
            Array.isArray(question) ? (
              <Slider label={question[0]} key={question[0]} />
            ) : (
              <Question
                setAnswer={setNthAnswer(idx)}
                scrollNext={scrollNext}
                {...question}
                key={idx}
              />
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default Questions

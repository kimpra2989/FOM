'use client'

import { FC } from 'react'
import { CommonQuestionType, QuestionType } from '../../types'
import { useCarousel } from './hooks'
import { embla, emblaContainer, emblaViewport } from './survey.css'
import { Question, StatusCircle } from './ui'

interface Props {
  questions: (QuestionType | CommonQuestionType)[]
  answer: number[]
  setNthAnswer: (idx: number) => (value: number) => void
}

const SurveyStep: FC<Props> = ({ questions, answer, setNthAnswer }) => {
  const { ref, currentSlideIdx, scrollNext } = useCarousel()

  return (
    <section className={embla}>
      <StatusCircle
        currentSlideIdx={currentSlideIdx}
        QuestionCount={questions.length}
      />
      <div className={emblaViewport} ref={ref}>
        <div className={emblaContainer}>
          {questions.map((question, idx) => (
            <Question
              setAnswer={setNthAnswer(idx)}
              scrollNext={scrollNext}
              sliderValue={answer[idx]}
              {...question}
              key={idx}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SurveyStep

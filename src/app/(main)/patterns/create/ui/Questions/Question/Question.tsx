'use client'

import { ChangeEventHandler, FC } from 'react'
import { CarouselHookReturnType } from '../../../hooks/useCarousel'
import { QuestionColorType, QuestionType } from '../../../types'
import {
  answerContainerStyles,
  answerStyles,
  inputStyles,
  questionStyles,
  slideStyles,
} from './question.css'

interface Props extends QuestionType {
  scrollNext: CarouselHookReturnType['scrollNext']
  setAnswer: (value: number) => void
  color: QuestionColorType
}

const Question: FC<Props> = ({
  question,
  answers,
  color,
  setAnswer,
  scrollNext,
}) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setAnswer(+e.target.value)
    requestAnimationFrame(() => {
      scrollNext()
    })
  }

  return (
    <div className={slideStyles}>
      <legend className={questionStyles({ background: color })}>
        {question}
      </legend>
      <fieldset className={answerContainerStyles}>
        {answers.map((answer, idx) => (
          <label className={answerStyles({ borderColor: color })} key={idx}>
            <input
              className={inputStyles}
              type="radio"
              name={question}
              value={idx}
              onChange={handleChange}
            />
            {answer}
          </label>
        ))}
      </fieldset>
    </div>
  )
}

export default Question

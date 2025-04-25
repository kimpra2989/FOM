'use client'

import { ChangeEventHandler, FC, MouseEventHandler } from 'react'
import { CarouselHookReturnType } from '../../../hooks/useCarousel'
import { Question as QuestionType } from '../../../types'
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
}

const Question: FC<Props> = ({ question, answers, setAnswer, scrollNext }) => {
  const handleAnswer: MouseEventHandler = (e) => {
    if (e.target instanceof HTMLElement && e.target.tagName === 'INPUT') {
      scrollNext()
    }
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setAnswer(+e.target.value)
  }

  return (
    <div className={slideStyles}>
      <legend className={questionStyles}>{question}</legend>
      <fieldset className={answerContainerStyles} onClick={handleAnswer}>
        {answers.map((answer, idx) => (
          <label className={answerStyles} key={idx}>
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

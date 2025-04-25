'use client'

import { FC, MouseEventHandler } from 'react'
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
}

const Question: FC<Props> = ({ question, answers, scrollNext }) => {
  const handleAnswer: MouseEventHandler = (e) => {
    if (e.target instanceof HTMLElement && e.target.tagName === 'INPUT') {
      scrollNext()
    }
  }

  // TODO : store의 값을 변경하는 로직으로 수정
  const handleChange = (e) => {
    console.log(e.target.value)
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

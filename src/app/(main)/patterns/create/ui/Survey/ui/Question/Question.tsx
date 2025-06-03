import { Slider } from '#/ui'
import { ChangeEventHandler, FC, MouseEventHandler } from 'react'
import { CarouselHookReturnType } from '../../hooks/useCarousel'

import {
  CommonQuestionType,
  QuestionColorType,
  QuestionType,
} from '../../../../types'
import {
  answerContainerStyles,
  answerStyles,
  inputStyles,
  questionStyles,
  slideStyles,
} from './question.css'

interface Props extends CommonQuestionType {
  scrollNext: CarouselHookReturnType['scrollNext']
  setAnswer: (value: number) => void
  color?: QuestionColorType
  sliderValue?: number
  currentSlideIdx: number
}

const Question: FC<Props> = ({
  question,
  answers,
  color,
  setAnswer,
  scrollNext,
  sliderValue,
  currentSlideIdx,
}) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setAnswer(+e.target.value)
    scrollNext()
  }

  const handleMouseUp: MouseEventHandler<HTMLInputElement> = (e) => {
    setAnswer(+e.currentTarget.value)
    scrollNext()
  }

  const commonSliderProps = {
    onMouseUp: handleMouseUp,
    min: 0,
    label: question,
    value: sliderValue,
  }

  return (
    <div className={slideStyles}>
      {color ? (
        <RadioQuestion
          question={question}
          answers={answers}
          color={color}
          onChange={handleChange}
        />
      ) : currentSlideIdx % 5 === 2 ? (
        <Slider max={255} {...commonSliderProps} />
      ) : (
        <Slider max={254 * 3} {...commonSliderProps} />
      )}
    </div>
  )
}

interface RadioQuestionProps extends QuestionType {
  onChange: ChangeEventHandler<HTMLInputElement>
}

function RadioQuestion({
  color,
  question,
  answers,
  onChange,
}: RadioQuestionProps) {
  return (
    <>
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
              onChange={onChange}
            />
            {answer}
          </label>
        ))}
      </fieldset>
    </>
  )
}

export default Question

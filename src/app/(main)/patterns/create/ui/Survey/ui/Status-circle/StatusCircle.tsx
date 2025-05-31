import { FC } from 'react'
import { container, statusText } from './statusCircle.css'

interface Props {
  currentSlideIdx: number
  QuestionCount: number
}

const StatusCircle: FC<Props> = ({ currentSlideIdx, QuestionCount }) => {
  const questionColor =
    currentSlideIdx < QuestionCount / 3
      ? 'Red'
      : currentSlideIdx < (QuestionCount * 2) / 3
      ? 'Green'
      : 'Blue'

  return (
    <div className={container({ background: questionColor })}>
      <span className={statusText}>
        {`${currentSlideIdx + 1} / ${QuestionCount}`}
      </span>
    </div>
  )
}

export default StatusCircle

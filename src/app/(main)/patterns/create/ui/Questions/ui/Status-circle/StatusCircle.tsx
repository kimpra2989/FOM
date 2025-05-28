import { FC } from 'react'
import { container, statusText } from './statusCircle.css'

interface Props {
  currentSlideIdx: number
}

const StatusCircle: FC<Props> = ({ currentSlideIdx }) => {
  const Question_Count = 9

  const questionColor =
    currentSlideIdx < 3 ? 'Red' : currentSlideIdx < 6 ? 'Green' : 'Blue'

  return (
    <div className={container({ background: questionColor })}>
      <span className={statusText}>
        {`${currentSlideIdx + 1} / ${Question_Count}`}
      </span>
    </div>
  )
}

export default StatusCircle

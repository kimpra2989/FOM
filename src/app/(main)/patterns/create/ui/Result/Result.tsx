import { FC } from 'react'
import { AnswersType } from '../../types'

interface Props {
  answer: AnswersType
}

const ResultStep: FC<Props> = ({ answer }) => {
  console.log('ans', answer)
  return (
    <div>
      결과 페이지
      <button onClick={() => window.print()}>프린트</button>
      <a href={'/pattern0.png'} download="result.svg">
        다운로드
      </a>
    </div>
  )
}

export default ResultStep

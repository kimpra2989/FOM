import { FC } from 'react'
import { getResultPatternData } from './fn'
import { container } from './result.css'
import BasePattern from './ui/BasePattern'

interface Props {
  answer: number[]
}

const ResultStep: FC<Props> = ({ answer }) => {
  // const ex = [2, 2, 125, 591, 591, 1, 2, 154, 658, 568, 1, 1, 175, 587, 531]
  // const ex2 = [2, 0, 100, 520, 156, 2, 2, 70, 636, 651, 2, 2, 240, 120, 606]

  const { colors, shapes } = getResultPatternData(answer)
  // const { colors, shapes } = getResultPatternData(answer)

  return (
    <>
      {/* <div className={buttons}>
        <button onClick={() => window.print()}> 패턴 출력</button>
      </div> */}
      <div className={container}>
        <div>
          {colors.map(
            (color) =>
              color.color !== 'black' && (
                <BasePattern
                  color={color.color}
                  hex={color.hex}
                  shape={shapes[color.color]}
                  key={color.color}
                />
              )
          )}
        </div>
      </div>
    </>
  )
}

export default ResultStep

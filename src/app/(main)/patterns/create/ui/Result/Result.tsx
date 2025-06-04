import { FC } from 'react'
import { getResultPatternData } from './fn'
import { container, left, leftTitle, patternBox } from './result.css'
import BasePattern from './ui/BasePattern'

interface Props {
  answer: number[]
}

const ResultStep: FC<Props> = ({ answer }) => {
  const ex = [2, 2, 125, 591, 591, 1, 2, 154, 658, 568, 1, 1, 175, 587, 531]
  // const ex2 = [2, 0, 100, 520, 156, 2, 2, 70, 636, 651, 2, 2, 240, 120, 606]

  const { colors, shapes } = getResultPatternData(answer ?? ex)
  // const { colors, shapes } = getResultPatternData(answer)
  const dict = {
    red: '경험',
    green: '해석',
    blue: '문화',
  }
  return (
    <>
      {/* <div className={buttons}>
        <button onClick={() => window.print()}> 패턴 출력</button>
      </div> */}
      <div className={container}>
        <div>
          <h2 className={leftTitle}>당신를 나타내는 패턴들입니다.</h2>
          <div className={left}>
            {colors.map(
              (color) =>
                color.color !== 'black' && (
                  <div className={patternBox} key={color.color}>
                    <label>
                      {'< ' +
                        dict[color.color as 'red' | 'green' | 'blue'] +
                        ' >'}
                    </label>
                    <BasePattern
                      color={color.color}
                      hex={color.hex}
                      shape={shapes[color.color as 'red' | 'green' | 'blue']}
                      key={color.color}
                    />
                  </div>
                )
            )}
          </div>
        </div>

        {/* <div className={right}>
          <Canvas gl={{ alpha: true }}>
            <Scene textureUrl={textureUrl} />
          </Canvas>
        </div> */}
      </div>
    </>
  )
}

export default ResultStep

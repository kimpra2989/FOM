import { FC } from 'react'
import processResult from './processResult'
import { buttons, colorBox, container, left, print } from './result.css'

interface Props {
  answer: number[]
}

const ResultStep: FC<Props> = ({ answer }) => {
  // const ex = [1, 0, 170, 295, 179, 2, 1, 598, 171, 636, 2, 0, 505, 538, 183]

  return (
    <>
      <div className={buttons}>
        <button onClick={() => window.print()}> 패턴 출력</button>
      </div>
      <div className={container}>
        <div>
          <p style={{ marginBottom: '20px' }}>사용되는 색</p>
          <div className={left}>
            {processResult(answer).colors.map(({ color, r, g, b }) => (
              <div
                className={colorBox}
                style={{
                  backgroundColor: `rgb(${r}, ${g}, ${b})`,
                }}
                key={color}
              >
                {`#${r}${g}${b}`}
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div>
          <p style={{ marginBottom: '20px' }}>사용되는 도형</p>
          <div className={left}>
            {processResult(answer).shapes.map((shape) => (
              <div className={colorBox} key={'' + shape[0] + shape[1]}>
                {shape.map((v) => v + 1).join(' - ')}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ResultStep

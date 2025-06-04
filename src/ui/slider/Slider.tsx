import { ComponentPropsWithRef } from 'react'
import { answerContainer, container, labelStyle, range } from './slider.css'

interface Props extends ComponentPropsWithRef<'input'> {
  step?: number
  label?: string
  answers?: string[]
}

const Slider: React.FC<Props> = ({
  ref,
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  label,
  answers,
  ...props
}) => {
  return (
    <div className={container}>
      {label && <label className={labelStyle}>{label}</label>}

      <input
        ref={ref}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className={range}
        {...props}
      />

      <div className={answerContainer}>
        {answers?.map((answer) => (
          <p className={answer} key={answer}>{answer}</p>
        ))}
      </div>
    </div>
  )
}

export default Slider

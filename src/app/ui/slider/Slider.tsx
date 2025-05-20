import { ComponentPropsWithRef } from 'react'
import { container } from './slider.css'

interface Props extends ComponentPropsWithRef<'input'> {
  step?: number
  label?: string
}

const Slider: React.FC<Props> = ({
  ref,
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  label,
}) => {
  return (
    <div className={container}>
      {label && <label>{label}</label>}
      <input
        ref={ref}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      />
      <span style={{ width: '20px', height: '20px' }}>{value}</span>
    </div>
  )
}

export default Slider

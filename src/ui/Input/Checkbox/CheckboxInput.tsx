import { ChangeEventHandler, FC, ReactNode } from 'react'
import { hidden } from './checkboxInput.css'

interface Props {
  checked: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
  label: string
  children?: ReactNode
}

const CheckBoxInput: FC<Props> = ({ checked, onChange, label, children }) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={hidden}
        aria-label={label}
      />
      {children}
    </label>
  )
}

export default CheckBoxInput

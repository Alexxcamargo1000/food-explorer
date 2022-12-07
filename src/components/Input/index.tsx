import { InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string
  hasNotLabel?: boolean
}
export function Input({ title, hasNotLabel = false, ...rest }: InputProps) {
  return (
    <InputContainer>
      {!hasNotLabel && <label htmlFor={title}>{title}</label>}
      <input id={title} {...rest} />
    </InputContainer>
  )
}

import { ReactElement, forwardRef } from 'react'
import { FieldError } from 'react-hook-form'

import style from './StyledInput.module.scss'

export type InputName =
  | 'name'
  | 'password'
  | 'email'
  | 'confirmPassword'
  | 'city'
  | 'country'

export interface StyledInputProps {
  inputError?: FieldError
  type: 'text' | 'password' | 'email'
  inputName: InputName
  label: string
}

export const StyledInput = forwardRef<HTMLInputElement, StyledInputProps>(
  (
    { inputName, label, inputError, type, ...inputProps },
    ref
  ): ReactElement => (
    <div className={style.inputContainer}>
      <label className={style.styledLabel} htmlFor={inputName}>
        {label}
      </label>

      <input
        className={style.styledInput}
        ref={ref}
        type={type}
        id={inputName}
        key={inputName}
        {...inputProps}
      />

      {inputError?.message && (
        <span className={style.inputError}>{inputError?.message}</span>
      )}
    </div>
  )
)

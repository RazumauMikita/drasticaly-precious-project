import { ReactElement, forwardRef } from 'react'

import { StyledInputProps } from './styledInput.type'

import style from './StyledInput.module.scss'

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

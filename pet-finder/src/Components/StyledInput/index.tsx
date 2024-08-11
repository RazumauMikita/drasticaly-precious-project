import { ReactElement, forwardRef } from 'react'

import { StyledInputProps } from './styledInput.type'
import FormError from '../FormError'

export const StyledInput = forwardRef<HTMLInputElement, StyledInputProps>(
  (
    { inputName, label, inputError, type, ...inputProps },
    ref
  ): ReactElement => (
    <div className="w-full flex flex-col relative">
      <div className="w-full m-auto">
        <label
          className="m-auto w-1/3 block mb-2 text-sm font-medium text-gray-900"
          htmlFor={inputName}
        >
          {label}
        </label>
        <input
          className="m-auto w-1/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          ref={ref}
          type={type}
          id={inputName}
          key={inputName}
          {...inputProps}
        />
      </div>

      {inputError?.message && <FormError message={inputError.message} />}
    </div>
  )
)

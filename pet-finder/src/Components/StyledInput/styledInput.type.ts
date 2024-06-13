import { FieldError } from 'react-hook-form'

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

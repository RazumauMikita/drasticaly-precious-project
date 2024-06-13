import { InputName } from '../Components/StyledInput/styledInput.type'

export interface IFormFields {
  name: InputName
  label: string
  type: 'text' | 'password' | 'email'
}

export interface ILoginFormFields {
  name: 'email' | 'password'
  label: string
  type: 'text' | 'password' | 'email'
}
export const registerFormFields: IFormFields[] = [
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'password', label: 'Password', type: 'password' },
  { name: 'confirmPassword', label: 'Confirm password', type: 'password' },
  { name: 'name', label: 'Name', type: 'text' },
  { name: 'country', label: 'Country', type: 'text' },
  { name: 'city', label: 'City', type: 'text' },
]

export const loginFormFields: ILoginFormFields[] = [
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'password', label: 'Password', type: 'password' },
]

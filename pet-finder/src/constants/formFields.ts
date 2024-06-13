import { InputName } from '../Components/StyledInput'

export interface IRegisterFormFields {
  name: InputName
  label: string
  type: 'text' | 'password' | 'email'
}

export const registerFormFields: IRegisterFormFields[] = [
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'password', label: 'Password', type: 'password' },
  { name: 'confirmPassword', label: 'Confirm password', type: 'password' },
  { name: 'name', label: 'Name', type: 'text' },
  { name: 'country', label: 'Country', type: 'text' },
  { name: 'city', label: 'City', type: 'text' },
]

import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { LoginFormType, loginSchema } from '../../../utils/loginFormSchema'

import style from './LoginForm.module.scss'
import { StyledInput } from '../../StyledInput'
import { StyledButton } from '../../StyledButton'

interface LoginFormProps {}

export const LoginForm: FC<LoginFormProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'all', resolver: yupResolver(loginSchema()) })
  const onSubmit: SubmitHandler<LoginFormType> = ({ email, password }) => {
    console.log(email, password)
  }
  return (
    <form className={style.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        inputError={errors.email}
        inputName="email"
        label="Email"
        type="email"
        {...register('email')}
      />
      <StyledInput
        inputError={errors.password}
        inputName="password"
        label="Password"
        type="password"
        {...register('password')}
      />
      <StyledButton text="log in" type="submit" disabled={!isValid} />
    </form>
  )
}

import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { StyledInput } from '../../StyledInput'
import { StyledButton } from '../../StyledButton'

import { logIn } from '../../../requests/req'
import { LoginFormType, loginSchema } from '../../../utils/loginFormSchema'

import styles from './LoginForm.module.scss'
import { ERROR_MESSAGES } from '../../../constants/errorMessages'

interface LoginFormProps {}

export const LoginForm: FC<LoginFormProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(loginSchema(ERROR_MESSAGES)),
  })

  const onSubmit: SubmitHandler<LoginFormType> = async ({
    email,
    password,
  }) => {
    try {
      const response = await logIn({ email, password })
      console.log(email, password)
      console.log(response)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
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

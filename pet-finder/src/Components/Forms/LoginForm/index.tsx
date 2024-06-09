import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { StyledInput } from '../../StyledInput'
import { StyledButton } from '../../StyledButton'

import { logIn } from '../../../requests/req'
import { LoginFormType, loginSchema } from '../../../utils/loginFormSchema'
import { ERROR_MESSAGES } from '../../../constants/errorMessages'
import { IResponseBodyLogIn } from '../../../requests/interfaces'
import {
  exceptionResponse,
  ExceptionMessage,
} from '../../../requests/constants'

import styles from './LoginForm.module.scss'

interface LoginFormProps {}

export const LoginForm: FC<LoginFormProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm({
    mode: 'all',
    resolver: yupResolver(loginSchema(ERROR_MESSAGES)),
  })

  const onSubmit: SubmitHandler<LoginFormType> = async ({
    email,
    password,
  }) => {
    console.log(email, password)
    try {
      const response = await logIn({ email, password })
      if (!response.ok) {
        const serverMessage =
          exceptionResponse[response.status as keyof ExceptionMessage]
        setError('root.serverError', { message: serverMessage })
      } else {
        const responseBody: IResponseBodyLogIn = await response.json()
        console.log(responseBody)
      }
    } catch (err) {
      if (err instanceof Error) {
        setError('root.serverError', { message: exceptionResponse[500] })
      }
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
      {errors.root?.serverError && <p>{errors.root?.serverError.message}</p>}
    </form>
  )
}

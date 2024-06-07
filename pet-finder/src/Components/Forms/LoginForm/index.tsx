import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { StyledInput } from '../../StyledInput'
import { StyledButton } from '../../StyledButton'

import { LoginFormType, loginSchema } from '../../../utils/loginFormSchema'

import styles from './LoginForm.module.scss'
import { IRequestBodySignUp, signUp } from '../../../requests/req'

interface LoginFormProps {}

export const LoginForm: FC<LoginFormProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'all', resolver: yupResolver(loginSchema()) })
  const onSubmit: SubmitHandler<LoginFormType> = async ({
    email,
    password,
  }) => {
    const singUnBody: IRequestBodySignUp = {
      email: 'example333@site.com',
      name: 'Sea SparrowNext ',
      password: 'pass121233',
    }
    const response = await signUp(singUnBody)
    console.log(response)
    console.log(email, password)
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

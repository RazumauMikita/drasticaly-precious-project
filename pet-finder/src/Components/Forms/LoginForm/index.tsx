import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { StyledInput } from '../../StyledInput'
import { StyledButton } from '../../StyledButton'

import { getUserById } from '../../../requests/req'
import { LoginFormType, loginSchema } from '../../../utils/loginFormSchema'

import styles from './LoginForm.module.scss'

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
    const response = await getUserById(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmMDRkZGRjNy0wMTU0LTQwZWMtYTMxMS1lOWU1MGRhZjMzMjgiLCJ1c2VybmFtZSI6ImVtYWlsQGV4LmNvbSIsImlhdCI6MTcxNzc5NzUzNCwiZXhwIjoxNzE3Nzk3NTk0fQ.tWkz-wRCCi2_vhhmF3PAEXYXRsQSaoJj8W3pLVACwng',
      'f04dddc7-0154-40ec-a311-e9e50daf3328'
    )
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

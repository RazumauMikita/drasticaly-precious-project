import { FC } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'

import { StyledInput } from '../../StyledInput'
import { StyledButton } from '../../StyledButton'

import { ERROR_MESSAGES } from '../../../constants/errorMessages'
import {
  RegisterFormType,
  registerSchema,
} from '../../../utils/registerFormSchema'

import styles from './RegistrationForm.module.scss'
import { logIn, signUp } from '../../../requests/req'
import {
  IRequestBodyLogIn,
  IResponseBodyLogIn,
} from '../../../requests/interfaces'
import {
  ExceptionMessage,
  exceptionResponse,
} from '../../../requests/constants'

interface RegistrationFormProps {}

export const RegistrationForm: FC<RegistrationFormProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm({
    mode: 'all',
    resolver: yupResolver(registerSchema(ERROR_MESSAGES)),
  })

  const onSubmit: SubmitHandler<RegisterFormType> = async (requestBody) => {
    try {
      const singUpResponse = await signUp(requestBody)
      if (!singUpResponse.ok) {
        const serverMessage =
          exceptionResponse[singUpResponse.status as keyof ExceptionMessage]
        setError('root.serverError', { message: serverMessage })
      } else {
        const reqBodyLogIn: IRequestBodyLogIn = {
          email: requestBody.email,
          password: requestBody.password,
        }
        const logInResponse = await logIn(reqBodyLogIn)
        if (logInResponse.ok) {
          const { accessToken, refreshToken }: IResponseBodyLogIn =
            await logInResponse.json()
          console.log(accessToken, refreshToken)
        }
      }
    } catch (err) {
      if (err instanceof Error) {
        setError('root.serverError', { message: exceptionResponse[500] })
      }
    }
  }

  return (
    <form className={styles.registrationForm} onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        inputName="email"
        label="Email"
        type="email"
        inputError={errors.email}
        {...register('email')}
      />
      <StyledInput
        inputName="name"
        label="Name"
        type="text"
        inputError={errors.name}
        {...register('name')}
      />
      <StyledInput
        inputName="country"
        label="Country"
        type="text"
        inputError={errors.country}
        {...register('country')}
      />
      <StyledInput
        inputName="city"
        label="City"
        type="text"
        inputError={errors.city}
        {...register('city')}
      />
      <StyledInput
        inputName="password"
        label="Password"
        type="password"
        inputError={errors.password}
        {...register('password')}
      />
      <StyledInput
        inputName="confirmPassword"
        label="Confirm password"
        type="password"
        inputError={errors.confirmPassword}
        {...register('confirmPassword')}
      />
      <StyledButton text="register" type="submit" disabled={!isValid} />
      {errors.root?.serverError && <p>{errors.root?.serverError.message}</p>}
    </form>
  )
}

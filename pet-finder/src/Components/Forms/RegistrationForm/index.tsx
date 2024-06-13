import { FC, useCallback } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'

import { StyledInput } from '../../StyledInput'
import { StyledButton } from '../../StyledButton'

import { ERROR_MESSAGES } from '../../../constants/errorMessages'
import {
  RegisterFormType,
  registerSchema,
} from '../../../utils/registerFormSchema'
import { logIn, signUp } from '../../../requests/req'

import { registerFormFields } from '../../../constants/formFields'
import {
  IRequestBodyLogIn,
  IResponseBodyLogIn,
} from '../../../requests/interfaces'
import {
  ExceptionMessage,
  exceptionResponse,
} from '../../../requests/constants'

import styles from './RegistrationForm.module.scss'

export const RegistrationForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm({
    mode: 'all',
    resolver: yupResolver(registerSchema(ERROR_MESSAGES)),
  })

  const handleServerError = useCallback(
    (status: number) => {
      const serverMessage = exceptionResponse[status as keyof ExceptionMessage]
      setError('root.serverError', { message: serverMessage })
    },
    [setError]
  )

  const onSubmit: SubmitHandler<RegisterFormType> = useCallback(
    async (requestBody) => {
      try {
        const singUpResponse = await signUp(requestBody)
        if (!singUpResponse.ok) {
          handleServerError(singUpResponse.status)
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
      } catch {
        setError('root.serverError', { message: exceptionResponse[500] })
      }
    },
    [handleServerError, setError]
  )

  return (
    <form className={styles.registrationForm} onSubmit={handleSubmit(onSubmit)}>
      {registerFormFields.map((field) => (
        <StyledInput
          key={field.name}
          inputName={field.name}
          label={field.label}
          type={field.type}
          inputError={errors[field.name]}
          {...register(`${field.name}`)}
        />
      ))}
      <StyledButton text="register" type="submit" disabled={!isValid} />

      {errors.root?.serverError && <p>{errors.root?.serverError.message}</p>}
    </form>
  )
}

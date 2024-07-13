import { FC, useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { StyledInput } from '../../StyledInput'
import { StyledButton } from '../../StyledButton'

import { logIn } from '../../../requests/req'
import {
  LoginFormType,
  loginSchema,
} from '../../../utils/validation/loginFormSchema'
import { ERROR_MESSAGES } from '../../../constants/errorMessages'
import { IResponseBodyLogIn } from '../../../requests/interfaces'
import {
  exceptionResponse,
  ExceptionMessage,
} from '../../../requests/constants'
import { loginFormFields } from '../../../constants/formFields'

export const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm({
    mode: 'all',
    resolver: yupResolver(loginSchema(ERROR_MESSAGES)),
  })

  const onSubmit: SubmitHandler<LoginFormType> = useCallback(
    async ({ email, password }) => {
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
    },
    [setError]
  )

  return (
    <form
      className="w-full flex flex-col justify-between gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      {loginFormFields.map((field) => (
        <StyledInput
          key={field.name}
          inputName={field.name}
          label={field.label}
          type={field.type}
          inputError={errors[field.name]}
          {...register(field.name)}
        />
      ))}
      <StyledButton text="log in" type="submit" disabled={!isValid} />
      {errors.root?.serverError && (
        <p className="">{errors.root?.serverError.message}</p>
      )}
    </form>
  )
}

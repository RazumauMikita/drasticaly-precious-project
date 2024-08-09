import { FC, useCallback } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import { StyledInput } from '../../StyledInput'
import { StyledButton } from '../../StyledButton'

import { selectUserData } from '../../../store/userData/userDataSlice'
import { signUpFB } from '../../../firebase/auth/auth'

import { ERROR_MESSAGES } from '../../../constants/errorMessages'
import {
  RegisterFormType,
  registerSchema,
} from '../../../utils/validation/registerFormSchema'
import { registerFormFields } from '../../../constants/formFields'
import {
  ExceptionMessage,
  exceptionResponse,
} from '../../../requests/constants'

export const RegistrationForm: FC = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUserData)
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
        const user = await signUpFB(requestBody.email, requestBody.password)

        console.log(user)
      } catch {
        setError('root.serverError', { message: exceptionResponse[500] })
      }
    },
    [handleServerError, setError, dispatch, user]
  )

  return (
    <form
      className="w-full overflow-auto flex flex-col justify-between gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
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

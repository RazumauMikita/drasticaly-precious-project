import { FC, useCallback } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import { StyledInput } from '../../StyledInput'
import { StyledButton } from '../../StyledButton'

import { ERROR_MESSAGES } from '../../../constants/errorMessages'
import {
  RegisterFormType,
  registerSchema,
} from '../../../utils/validation/registerFormSchema'
import { logIn, signUp } from '../../../requests/req'

import { registerFormFields } from '../../../constants/formFields'
import {
  IRequestBodyLogIn,
  IResponseBodyLogIn,
  ResponseBodySignUp,
} from '../../../requests/interfaces'
import {
  ExceptionMessage,
  exceptionResponse,
} from '../../../requests/constants'

import styles from './RegistrationForm.module.scss'
import {
  selectUserData,
  setUserData,
} from '../../../store/userData/userDataSlice'
import { setIsLoggedIn } from '../../../store/userState/userStateSlice'

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
        const singUpResponse = await signUp(requestBody)
        if (!singUpResponse.ok) {
          handleServerError(singUpResponse.status)
        } else {
          const response: ResponseBodySignUp = await singUpResponse.json()
          dispatch(setUserData({ user: response }))
          console.log(user)
          const reqBodyLogIn: IRequestBodyLogIn = {
            email: requestBody.email,
            password: requestBody.password,
          }
          const logInResponse = await logIn(reqBodyLogIn)
          if (logInResponse.ok) {
            const { accessToken, refreshToken }: IResponseBodyLogIn =
              await logInResponse.json()
            dispatch(setIsLoggedIn(true))
            localStorage.setItem('refreshToken', refreshToken)

            console.log(accessToken, refreshToken)
          }
        }
      } catch {
        setError('root.serverError', { message: exceptionResponse[500] })
      }
    },
    [handleServerError, setError, dispatch, user]
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

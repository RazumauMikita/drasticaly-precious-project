import * as yup from 'yup'
import { InferType } from 'yup'
import { ERROR_MESSAGES, ErrorMessages } from '../constants/errorMessages'

export const registerSchema = (errorMessages: ErrorMessages) => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, errorMessages.INVALID_EMAIL)
      .required(errorMessages.REQUIRED_EMAIL),
    password: yup
      .string()
      .matches(/\d/, errorMessages.PASSWORD_DIGIT_CONTAIN)
      .matches(/\p{L}/gu, errorMessages.PASSWORD_LETTER_CONTAIN)
      .matches(
        /[-=+!@"№;:?#$%_()><,.|{}'`~/\\^&[*\]]/,
        errorMessages.PASSWORD_SPECIAL_CH_CONTAIN
      )
      .min(8, errorMessages.SHORT_PASSWORD)
      .required(errorMessages.REQUIRED_PASSWORD),
    confirmPassword: yup
      .string()
      .required(errorMessages.REQUIRED_CONFIRM_PASS)
      .test(
        'is confirm password match',
        errorMessages.MATCH_CONFIRM_PASS,
        (value, context) => context.parent.password === value
      ),
    name: yup.string().required(),
    country: yup.string(),
    city: yup.string(),
  })

  return schema
}

const schema = registerSchema(ERROR_MESSAGES)

export type RegisterFormType = InferType<typeof schema>

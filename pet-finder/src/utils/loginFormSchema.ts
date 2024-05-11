import * as yup from 'yup'
import { InferType } from 'yup'

const loginSchema = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, 'Incorrect format')
      .required(),
    password: yup
      .string()
      .matches(/\d/)
      .matches(/\p{L}/gu)
      .matches(/[-=+!@"№;:?#$%_()><,.|{}'`~/\\^&[*\]]/)
      .min(8)
      .required(),
  })

  return schema
}

const schema = loginSchema()

export type LoginFormType = InferType<typeof schema>
export { loginSchema }

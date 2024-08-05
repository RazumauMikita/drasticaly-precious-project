import * as yup from 'yup'
import { InferType } from 'yup'

import { ERROR_MESSAGES, ErrorMessages } from '../../constants/errorMessages'

import { isValidFileExtension } from '../isValidExtension'

const lostFormSchema = (errorMessages: ErrorMessages) => {
  const schema = yup.object().shape({
    description: yup.string().required(errorMessages.REQUIRED_DESCRIPTION),
    lat: yup.number().required(errorMessages.REQUIRED_LOCATION),
    lng: yup.number().required(errorMessages.REQUIRED_LOCATION),
    isLost: yup.boolean().required(),
    images: yup
      .mixed()
      .required()
      .test({
        message: errorMessages.IMAGE_FORMAT,
        test: (file) => {
          if (file instanceof FileList && file[0] !== undefined) {
            return isValidFileExtension(file[0].type)
          }
          return false
        },
      })
      .test({
        message: errorMessages.MAX_FILE_SIZE,
        test: (file) => {
          if (file instanceof FileList && file[0] !== undefined) {
            return file[0].size <= import.meta.env.VITE_MAX_FILE_SIZE
          }
          return false
        },
      }),
  })

  return schema
}

const schema = lostFormSchema(ERROR_MESSAGES)

export type LostFormType = InferType<typeof schema>
export { lostFormSchema }

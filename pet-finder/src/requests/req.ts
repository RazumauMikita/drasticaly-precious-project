import { baseURL, apiRoutes, httpMethods } from './constants'
import {
  IRequestBodyLogIn,
  IRequestBodyRefresh,
  IRequestBodySignUp,
  ResponseBodyRefresh,
  ResponseBodySignUp,
  ResponseBodyUserById,
} from './interfaces'

export const signUp = async (
  requestBody: IRequestBodySignUp
): Promise<ResponseBodySignUp> => {
  const response: Response = await fetch(`${baseURL}${apiRoutes.SIGNUP}`, {
    method: httpMethods.POST,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })
  const responseBody: ResponseBodySignUp = await response.json()
  return responseBody
}

export const logIn = async (
  requestBody: IRequestBodyLogIn
): Promise<Response> => {
  const response: Response = await fetch(`${baseURL}${apiRoutes.LOGIN}`, {
    method: httpMethods.POST,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })
  return response
}

export const refreshToken = async (
  requestBody: IRequestBodyRefresh
): Promise<ResponseBodyRefresh> => {
  const response: Response = await fetch(`${baseURL}${apiRoutes.REFRESH}`, {
    method: httpMethods.POST,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })

  const responseBody: ResponseBodyRefresh = await response.json()
  return responseBody
}

export const getUserById = async (
  accessToken: string,
  id: string
): Promise<ResponseBodyUserById> => {
  const response: Response = await fetch(`${baseURL}${apiRoutes.USERS}/${id}`, {
    method: httpMethods.GET,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  const responseBody: ResponseBodyUserById = await response.json()
  return responseBody
}
// export const postLost = async () => {

// }

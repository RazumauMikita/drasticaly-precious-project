export const apiURL = 'http://localhost:4000/'

export enum apiRoutes {
  USERS = 'users',
  LOGIN = 'login',
  SIGNUP = 'auth/signup',
  REFRESH = 'refresh',
  LOST = 'lost',
}

export enum httpMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export interface IRequestBodySignUp {
  email: string
  name: string
  password: string
  country?: string
  city?: string
}

export interface IUser {
  id: string
  name: string
  email: string
  password: string
  country: string
  city: string
  lost: string[]
  version: number
  createdAt: number
  updatedAt: number
}

type ResponseBodySignUp = Omit<IUser, 'password'>

export const signUp = async (
  requestBody: IRequestBodySignUp
): Promise<ResponseBodySignUp> => {
  const response: Response = await fetch(`${apiURL}${apiRoutes.SIGNUP}`, {
    method: httpMethods.POST,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })
  const responseBody = await response.json()
  return responseBody
}

export const baseURL = 'http://localhost:4000/'

export enum apiRoutes {
  USERS = 'users',
  LOGIN = 'auth/login',
  SIGNUP = 'auth/signup',
  REFRESH = 'auth/refresh',
  LOST = 'lost',
}

export enum httpMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export const exceptionResponse = {
  404: 'User does not exist.',
  403: 'Password is incorrect.',
  500: 'Problems on server.',
}
export type ExceptionMessage = typeof exceptionResponse

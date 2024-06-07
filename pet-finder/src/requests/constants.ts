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

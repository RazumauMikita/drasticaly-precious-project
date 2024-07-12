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

export interface ILost {
  id: string
  ownerId: string
  isLost: boolean
  description: string
  lng: number
  lat: number
  images: string[]
  version: number
  createdAt: number
  updatedAt: number
}

export interface IRequestBodySignUp {
  email: string
  name: string
  password: string
  country?: string
  city?: string
}

export interface IRequestBodyLogIn {
  email: string
  password: string
}

export interface IRequestBodyRefresh {
  refreshToken: string
}

export interface IRequestBodyPostLost {
  ownerId: string
  isLost: boolean
  description: string
  coordinates: string
}
export interface IResponseBodyLogIn {
  accessToken: string
  refreshToken: string
}
export type ResponseBodySignUp = Omit<IUser, 'password'>

export type ResponseBodyRefresh = IRequestBodyLogIn

export type ResponseBodyUserById = ResponseBodySignUp

export type ResponseBodyPostLost = ILost

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  signOut,
} from 'firebase/auth'

import { app } from '../db/db'

export const auth = getAuth(app)

export const signUpFB = async (email: string, password: string) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )
  await signInWithEmailAndPassword(auth, email, password)

  return userCredential.user
}

export const signInFB = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password)
  return userCredential.user
}

export const signOutFB = () => {
  signOut(auth)
}

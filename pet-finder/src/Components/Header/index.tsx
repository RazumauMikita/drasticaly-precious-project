import { FC } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { NavigateBar } from '../NavigateBar'
import { Logo } from '../Links/Logo'

import { LoginLink } from '../Links/LoginLink'
import {
  selectIsLoggedIn,
  setIsLoggedIn,
} from '../../store/userState/userStateSlice'
import { auth, signOutFB } from '../../firebase/auth/auth'

export const Header: FC = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const dispatch = useDispatch()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setIsLoggedIn(true))
    } else {
      dispatch(setIsLoggedIn(false))
    }
  })
  return (
    <header className="p-4 bg-teal-700 text-white w-full h-auto flex flex-row justify-between items-center gap-8">
      <Logo />
      <NavigateBar />
      {isLoggedIn ? (
        <button
          className="flex flex-row justify-center items-center gap-1 font-medium bg-slate-500 hover:bg-slate-700 rounded-3xl px-2 py-1 transition ease-in-out duration-500"
          onClick={signOutFB}
        >
          Sign Out
        </button>
      ) : (
        <LoginLink />
      )}
    </header>
  )
}

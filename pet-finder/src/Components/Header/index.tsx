import { FC } from 'react'

import { NavigateBar } from '../NavigateBar'
import { Logo } from '../Links/Logo'

import { LoginLink } from '../Links/LoginLink'

export const Header: FC = () => (
  <header className="p-4 bg-teal-700 text-white w-full h-auto flex flex-row justify-between items-center gap-8">
    <Logo />
    <NavigateBar />
    <LoginLink />
  </header>
)

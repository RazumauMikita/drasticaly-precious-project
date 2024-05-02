import { FC } from 'react'

import { NavigateBar } from '../NavigateBar'
import { Logo } from '../Logo'

import style from './Header.module.scss'
import { LoginLink } from '../LoginLink'

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => (
  <header className={style.header}>
    <h1>Header</h1>
    <Logo />
    <NavigateBar />
    <LoginLink />
  </header>
)

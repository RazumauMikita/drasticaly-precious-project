import { FC } from 'react'

import { NavigateBar } from '../NavigateBar'
import { Logo } from '../Logo'

import style from './Header.module.scss'
import { LoginLink } from '../LoginLink'
import { StyledSelect } from '../StyledSelect'

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => (
  <header className={style.header}>
    <StyledSelect />
    <Logo />
    <NavigateBar />
    <LoginLink />
  </header>
)

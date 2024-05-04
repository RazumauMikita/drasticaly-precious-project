import { FC } from 'react'

import { NavigateBar } from '../NavigateBar'
import { Logo } from '../Logo'

import style from './Header.module.scss'
import { LoginLink } from '../Links/LoginLink'
import { StyledSelect } from '../StyledSelect'
import { ProfileLink } from '../Links/ProfileLink'

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => (
  <header className={style.header}>
    <StyledSelect />
    <Logo />
    <NavigateBar />
    <ProfileLink />
    <LoginLink />
  </header>
)

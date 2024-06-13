import { FC } from 'react'

import { NavigateBar } from '../NavigateBar'
import { Logo } from '../Links/Logo'

import { LoginLink } from '../Links/LoginLink'
import { StyledSelect } from '../StyledSelect'
import { ProfileLink } from '../Links/ProfileLink'

import style from './Header.module.scss'

export const Header: FC = () => (
  <header className={style.header}>
    <p>Header</p>
    <StyledSelect />
    <Logo />
    <NavigateBar />
    <ProfileLink />
    <LoginLink />
  </header>
)

import { FC } from 'react'
import { Link } from 'react-router-dom'

import { routes } from '../../../constants/routes'

import logo from '../../../assets/logo.png'

import style from './Logo.module.scss'

export const Logo: FC = () => (
  <Link className={style.logo} to={routes.HOME}>
    <img className={style.logo_image} src={logo} alt="logo" />
  </Link>
)

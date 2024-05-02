import { FC } from 'react'
import { Link } from 'react-router-dom'

import style from './NavigateBar.module.scss'

import { routes } from '../../constants/routes'

interface NavigateBarProps {}

export const NavigateBar: FC<NavigateBarProps> = () => (
  <nav className={style.navigateBar}>
    <Link to={routes.HOME}>Home Page</Link>
    <Link to={routes.CONTENT}>Content Page</Link>
  </nav>
)

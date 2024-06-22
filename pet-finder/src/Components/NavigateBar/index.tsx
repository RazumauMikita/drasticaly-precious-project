import { FC } from 'react'
import { Link } from 'react-router-dom'

import style from './NavigateBar.module.scss'

import { routes } from '../../constants/routes'

export const NavigateBar: FC = () => (
  <nav className={style.navigateBar}>
    <Link to={routes.HOME}>Home</Link>
    <Link to={routes.CONTENT}>Content</Link>
    <Link to={routes.LOST_FORM}>Lost form</Link>
    <Link to={routes.REGISTER}>Register</Link>
  </nav>
)

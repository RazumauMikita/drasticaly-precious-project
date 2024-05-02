import { FC } from 'react'
import { Link } from 'react-router-dom'

import { routes } from '../../constants/routes'

import style from './Header.module.scss'

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => (
  <header className={style.header}>
    <h1>Header</h1>
    <nav>
      <Link to={routes.HOME}>Home Page</Link>
      <Link to={routes.CONTENT}>Content Page</Link>
    </nav>
  </header>
)

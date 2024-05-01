import { FC } from 'react'

import { Link } from 'react-router-dom'
import style from './Header.module.scss'

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => (
  <header className={style.header}>
    <h1>Header</h1>
    <nav>
      <Link to="/">Home Page</Link>
      <Link to="/content">Content Page</Link>
    </nav>
  </header>
)

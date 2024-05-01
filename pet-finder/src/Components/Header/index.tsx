import { FC } from 'react'

import style from './Header.module.scss'

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => (
  <div className={style.header}>Header</div>
)

import { FC } from 'react'

import style from './Footer.module.scss'

interface FooterProps {}

export const Footer: FC<FooterProps> = () => (
  <div className={style.footer}>Footer</div>
)

import { FC } from 'react'

import style from './LoginPage.module.scss'

interface LoginPageProps {}

export const LoginPage: FC<LoginPageProps> = () => (
  <section className={style.loginPage}>
    <h1>LoginPage</h1>
  </section>
)

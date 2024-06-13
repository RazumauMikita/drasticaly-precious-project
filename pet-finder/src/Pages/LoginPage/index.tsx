import { FC } from 'react'
import { Link } from 'react-router-dom'

import { LoginForm } from '../../Components/Forms/LoginForm'
import { routes } from '../../constants/routes'

import style from './LoginPage.module.scss'

export const LoginPage: FC = () => (
  <section className={style.loginPage}>
    <h1>LoginPage</h1>
    <LoginForm />
    <Link to={routes.REGISTER}>Register Page</Link>
  </section>
)

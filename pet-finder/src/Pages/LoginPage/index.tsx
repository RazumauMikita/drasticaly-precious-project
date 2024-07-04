import { FC } from 'react'
import { Link } from 'react-router-dom'

import { LoginForm } from '../../Components/Forms/LoginForm'
import { routes } from '../../constants/routes'

import style from './LoginPage.module.scss'

export const LoginPage: FC = () => (
  <section className={style.loginPage}>
    <h1 className="tw-heading">LoginPage</h1>
    <LoginForm />
    <p className="my-5 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      Have not yet an account? Follow to{' '}
      <Link
        to={routes.REGISTER}
        className="text-blue-600 hover:underline dark:text-blue-500"
      >
        Register page
      </Link>
      .
    </p>
  </section>
)

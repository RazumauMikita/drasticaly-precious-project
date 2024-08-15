import { FC, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { LoginForm } from '../../Components/Forms/LoginForm'

import { routes } from '../../constants/routes'
import { selectIsLoggedIn } from '../../store/userState/userStateSlice'

import style from './LoginPage.module.scss'

export const LoginPage: FC = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const navigate = useNavigate()
  useEffect(() => {
    if (isLoggedIn) navigate(routes.HOME)
  }, [isLoggedIn])

  return (
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
}

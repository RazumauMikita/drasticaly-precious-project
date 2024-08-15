import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RegistrationForm } from '../../Components/Forms/RegistrationForm'

import { routes } from '../../constants/routes'
import { selectIsLoggedIn } from '../../store/userState/userStateSlice'

import style from './RegistrationPage.module.scss'

export const RegistrationPage: FC = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const navigate = useNavigate()
  useEffect(() => {
    if (isLoggedIn) navigate(routes.HOME)
  }, [isLoggedIn])

  return (
    <section className={style.registerPage}>
      <h1>RegistrationPage</h1>
      <RegistrationForm />
    </section>
  )
}

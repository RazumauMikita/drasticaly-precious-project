import { FC } from 'react'

import style from './RegistrationPage.module.scss'
import { RegistrationForm } from '../../Components/Forms/RegistrationForm'

interface RegistrationPageProps {}

export const RegistrationPage: FC<RegistrationPageProps> = () => (
  <section className={style.registerPage}>
    <h1>RegistrationPage</h1>
    <RegistrationForm />
  </section>
)

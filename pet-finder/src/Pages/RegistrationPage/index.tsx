import { FC } from 'react'

import { RegistrationForm } from '../../Components/Forms/RegistrationForm'

import style from './RegistrationPage.module.scss'

export const RegistrationPage: FC = () => (
  <section className={style.registerPage}>
    <h1>RegistrationPage</h1>
    <RegistrationForm />
  </section>
)

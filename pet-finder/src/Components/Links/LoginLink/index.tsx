import { FC } from 'react'
import { Link } from 'react-router-dom'

import { routes } from '../../../constants/routes'
import { buttonsText } from '../../../constants/texts'

import style from './LoginLink.module.scss'

export const LoginLink: FC = () => (
  <Link className={style.loginLing} to={routes.LOGIN}>
    {buttonsText.LOG_IN}
  </Link>
)

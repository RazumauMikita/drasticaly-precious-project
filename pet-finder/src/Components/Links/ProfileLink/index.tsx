import { FC } from 'react'
import { Link } from 'react-router-dom'

import { routes } from '../../../constants/routes'

import profileIcon from '../../../assets/profile-user.svg'

import style from './ProfileLink.module.scss'

export const ProfileLink: FC = () => (
  <Link className={style.loginLing} to={routes.PROFILE}>
    <img className={style.profile_icon} src={profileIcon} alt="profile-icon" />
  </Link>
)

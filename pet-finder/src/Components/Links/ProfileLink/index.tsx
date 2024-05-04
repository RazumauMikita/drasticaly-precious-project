import { FC } from 'react'
import { Link } from 'react-router-dom'

import { routes } from '../../../constants/routes'

import profileIcon from '../../../assets/profile-user.svg'

import style from './ProfileLink.module.scss'

interface ProfileLinkProps {}

export const ProfileLink: FC<ProfileLinkProps> = () => (
  <Link className={style.loginLing} to={routes.PROFILE}>
    <img className={style.profile_icon} src={profileIcon} alt="profile-icon" />
  </Link>
)

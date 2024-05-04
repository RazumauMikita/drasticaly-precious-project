import { FC } from 'react'

import style from './ProfilePage.module.scss'

interface ProfilePageProps {}

export const ProfilePage: FC<ProfilePageProps> = () => (
  <section className={style.profilePage}>
    <h1>Profile Page</h1>
  </section>
)

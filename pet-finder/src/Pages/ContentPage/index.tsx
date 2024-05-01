import { FC } from 'react'

import style from './ContentPage.module.scss'

interface ContentPageProps {}

export const ContentPage: FC<ContentPageProps> = () => (
  <div className={style.contentPage}>
    <h1>ContentPage</h1>
  </div>
)

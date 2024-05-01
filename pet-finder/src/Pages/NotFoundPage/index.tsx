import { FC } from 'react'

import style from './NotFoundPage.module.scss'

interface NotFoundPageProps {}

export const NotFoundPage: FC<NotFoundPageProps> = () => (
  <div className={style.notFoundPage}>
    <h1>NotFoundPage</h1>
  </div>
)

import { FC } from 'react'

import style from './NotFoundPage.module.scss'

interface NotFoundPageProps {}

export const NotFoundPage: FC<NotFoundPageProps> = () => (
  <section className={style.notFoundPage}>
    <h1>NotFoundPage</h1>
  </section>
)

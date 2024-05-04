import { FC } from 'react'

import style from './HomePage.module.scss'

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = () => (
  <section className={style.homePage}>
    <h1>HomePage</h1>
  </section>
)

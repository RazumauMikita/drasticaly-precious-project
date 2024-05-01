import { FC } from 'react'

import { Header } from '../Header'
import { Footer } from '../Footer'

import style from './App.module.scss'

export const App: FC = () => (
  <div className={style.app}>
    <Header />
    <Footer />
  </div>
)

import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'

import style from './MainLayout.module.scss'

interface MainLayoutProps {}

export const MainLayout: FC<MainLayoutProps> = () => (
  <div className={style.mainLayout}>
    <Header />
    <Outlet />
    <Footer />
  </div>
)

import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { MainLayout } from '../../Layouts/MainLayout'
import { HomePage } from '../../Pages/HomePage'
import { ContentPage } from '../../Pages/ContentPage'
import { NotFoundPage } from '../../Pages/NotFoundPage'
import { LoginPage } from '../../Pages/LoginPage'
import { RegistrationPage } from '../../Pages/RegistrationPage'
import { ProfilePage } from '../../Pages/ProfilePage'

import { routes } from '../../constants/routes'

import style from './App.module.scss'

export const App: FC = () => (
  <div className={style.app}>
    <Routes>
      <Route path={routes.HOME} element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path={routes.LOGIN} element={<LoginPage />} />
        <Route path={routes.REGISTER} element={<RegistrationPage />} />
        <Route path={routes.CONTENT} element={<ContentPage />} />
        <Route path={routes.PROFILE} element={<ProfilePage />} />
        <Route path={routes.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
    </Routes>
  </div>
)

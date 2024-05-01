import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { MainLayout } from '../../Layouts/MainLayout'
import { HomePage } from '../../Pages/HomePage'
import { ContentPage } from '../../Pages/ContentPage'
import { NotFoundPage } from '../../Pages/NotFoundPage'

import style from './App.module.scss'

export const App: FC = () => (
  <div className={style.app}>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="content" element={<ContentPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </div>
)

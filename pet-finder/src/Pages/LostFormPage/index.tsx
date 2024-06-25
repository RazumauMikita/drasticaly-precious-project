import { FC } from 'react'

import style from './LostFormPage.module.scss'
import { LostForm } from '../../Components/Forms/LostForm'

export const LostFormPage: FC = () => (
  <div className={style.container}>
    <LostForm />
  </div>
)

import { ChangeEvent, FC, useState } from 'react'

import { languages } from '../../constants/data'

import { Language } from '../../types/data.type'

import style from './StyledSelect.module.scss'

export const StyledSelect: FC = () => {
  const [, setLang] = useState<Language>('EN')
  const handleOnChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target as HTMLSelectElement
    setLang(value as Language)
  }
  return (
    <select className={style.select} onChange={handleOnChangeSelect} id="lang">
      {languages.map((elem) => (
        <option className={style.option} key={elem} value={elem}>
          {elem}
        </option>
      ))}
    </select>
  )
}

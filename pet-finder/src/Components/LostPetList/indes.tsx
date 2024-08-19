import { FC } from 'react'

import { useAppSelector } from '../../store/hooks/hooks'

import style from './LostPetList.module.scss'
import { PetCard } from '../PetCard'

export const LostPetList: FC = () => {
  const { shownPets } = useAppSelector((state) => state.allPetData)

  return (
    <div className={style.container}>
      <ul className={style.lostList}>
        {shownPets &&
          shownPets.map((elem) => <PetCard petPoint={elem} key={elem.key} />)}
      </ul>
    </div>
  )
}

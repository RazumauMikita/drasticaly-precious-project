import { FC } from 'react'

import { useAppSelector } from '../../store/hooks/hooks'

import style from './LostPetList.module.scss'

export const LostPetList: FC = () => {
  const { shownPets } = useAppSelector((state) => state.allPetData)

  return (
    <div className={style.container}>
      <ul className={style.lostList}>
        {shownPets &&
          shownPets.map((elem) => (
            <li className={style.listElement} key={elem.key}>
              <img className={style.image} src={`${elem?.images}`} alt="Pet" />

              <p>
                <span>Posted at:</span>
                {elem?.createdAt}
              </p>
              <p>
                <span>Description: </span>
                {elem?.description}
              </p>
            </li>
          ))}
      </ul>
    </div>
  )
}

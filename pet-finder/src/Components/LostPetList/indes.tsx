import { FC } from 'react'

import { baseURL } from '../../requests/constants'

import { useAppSelector } from '../../store/hooks/hooks'

import style from './LostPetList.module.scss'

export const LostPetList: FC = () => {
  const { shownPets } = useAppSelector((state) => state.allPetData)
  const locations = shownPets
  return (
    <div className={style.container}>
      <ul className={style.lostList}>
        {locations &&
          locations.map((elem) => (
            <li className={style.listElement} key={elem.key}>
              <img
                className={style.image}
                src={`${baseURL}${elem?.images[0]}`}
                alt="Pet"
              />

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

import { FC } from 'react'

import { Point } from '../PointMarker'

import { baseURL } from '../../requests/constants'

import style from './LostPetList.module.scss'

interface LostPetListProps {
  locations: Point[]
}

export const LostPetList: FC<LostPetListProps> = ({ locations }) => (
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

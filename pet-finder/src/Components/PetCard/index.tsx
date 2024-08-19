import { FC } from 'react'

import { Point } from '../PointMarker'

import style from './PetCard.module.scss'
import { formatDateTime } from '../../utils/formatDateTime'

enum petStatus {
  LOST = 'Lost!',
  FOUND = 'Found!',
}

interface PetCardProps {
  petPoint: Point
}

export const PetCard: FC<PetCardProps> = ({ petPoint }) => {
  const { key, images, createdAt, description, isLost } = petPoint
  const { dateTime, time } = formatDateTime(createdAt)
  const status = isLost ? petStatus.LOST : petStatus.FOUND
  return (
    <li className={style.listElement} key={key}>
      <div className={style.dateContainer}>
        <span className={style.postedTime}>Posted at:</span>
        <span className={style.postedDate}>
          {time} {dateTime}
        </span>
      </div>
      <h2 className={isLost ? style.petLostStatus : style.petFoundStatus}>
        {status}
      </h2>
      <div className={style.imgContainer}>
        <img className={style.image} src={`${images}`} alt="Pet" />
      </div>
      <p className={style.description}>{description}</p>
    </li>
  )
}

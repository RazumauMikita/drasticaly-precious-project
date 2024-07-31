import { FC, useEffect, useState } from 'react'
import { APIProvider } from '@vis.gl/react-google-maps'

import { Point } from '../../Components/PointMarker'
import { MapComponent } from '../../Components/MapCpmponent'
import { LostPetList } from '../../Components/LostPetList/indes'

import { getLocations } from '../../utils/getLocations'

import { getLostList } from '../../firebase/db/db'
import { getLostFromResponse } from '../../utils/getLostFromResponse'
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'

import { setPetData } from '../../store/petData/petDataSlice'

import style from './ContentPage.module.scss'

export const ContentPage: FC = () => {
  const [locations, setLocations] = useState<Point[]>([])
  const [shownLost, setShownLost] = useState<Point[]>([])

  const { pets } = useAppSelector((state) => state.allPetData)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchLost = async () => {
      try {
        const response = await getLostList()
        const pets = getLostFromResponse(response)
        dispatch(setPetData({ pets }))
      } catch {
        console.error()
      }
    }
    fetchLost()
  }, [])

  useEffect(() => {
    setLocations(getLocations(pets))
    setShownLost(getLocations(pets))
  }, [pets])

  return (
    <section className={style.contentPage}>
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY || ''}>
        <aside className={style.aside}>
          <LostPetList locations={shownLost} />
        </aside>
        <main className={style.main}>
          <MapComponent locations={locations} setShownLost={setShownLost} />
        </main>
      </APIProvider>
    </section>
  )
}

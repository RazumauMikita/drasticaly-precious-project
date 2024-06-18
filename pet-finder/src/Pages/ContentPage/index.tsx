import { FC, useEffect, useState } from 'react'
import { APIProvider } from '@vis.gl/react-google-maps'

import { Point } from '../../Components/PointMarker'
import { MapComponent } from '../../Components/MapCpmponent'
import { LostPetList } from '../../Components/LostPetList/indes'

import { ILost } from '../../requests/interfaces'

import { getAllLost } from '../../requests/req'
import { getLocations } from '../../utils/getLocations'

import style from './ContentPage.module.scss'

export const ContentPage: FC = () => {
  const [locations, setLocations] = useState<Point[]>([])
  const [shownLost, setShownLost] = useState<Point[]>([])

  useEffect(() => {
    const fetchLost = async () => {
      try {
        const response: ILost[] = await getAllLost()
        setLocations(getLocations(response))
        setShownLost(getLocations(response))
      } catch {
        console.error()
      }
    }
    fetchLost()
  }, [])

  return (
    <section className={style.contentPage}>
      <APIProvider apiKey="AIzaSyAvrf86nTOVxt5xVWzTR0I1hiE6sXQj14w">
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

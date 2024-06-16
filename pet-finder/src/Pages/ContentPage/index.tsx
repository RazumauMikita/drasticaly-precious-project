import { FC, useEffect, useState } from 'react'

import { APIProvider } from '@vis.gl/react-google-maps'
import style from './ContentPage.module.scss'
import { MapComponent } from '../../Components/MapCpmponent'
import { getAllLost } from '../../requests/req'
import { ILost } from '../../requests/interfaces'
import { Point } from '../../Components/PointMarker'
import { getLocations } from '../../utils/getLocations'

export const ContentPage: FC = () => {
  const [locations, setLocations] = useState<Point[]>([])
  useEffect(() => {
    const fetchLost = async () => {
      try {
        const response: ILost[] = await getAllLost()
        setLocations(getLocations(response))
      } catch (err) {
        console.error(err)
      }
    }
    fetchLost()
  }, [])
  return (
    <section className={style.contentPage}>
      <APIProvider
        apiKey="AIzaSyAvrf86nTOVxt5xVWzTR0I1hiE6sXQj14w"
        onLoad={() => console.log('Maps API has loaded.')}
      >
        <aside className={style.aside} />
        <main className={style.main}>
          <MapComponent locations={locations} />
        </main>
      </APIProvider>
    </section>
  )
}

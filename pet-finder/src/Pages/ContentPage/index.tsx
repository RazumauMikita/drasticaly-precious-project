import { FC } from 'react'

import { APIProvider } from '@vis.gl/react-google-maps'
import style from './ContentPage.module.scss'
import { MapComponent } from '../../Components/MapCpmponent'

export const ContentPage: FC = () => (
  <section className={style.contentPage}>
    <APIProvider
      apiKey="AIzaSyAvrf86nTOVxt5xVWzTR0I1hiE6sXQj14w"
      onLoad={() => console.log('Maps API has loaded.')}
    >
      <aside className={style.aside} />
      <main className={style.main}>
        <MapComponent />
      </main>
    </APIProvider>
  </section>
)

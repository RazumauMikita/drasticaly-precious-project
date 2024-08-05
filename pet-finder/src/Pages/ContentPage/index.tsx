import { FC, useEffect } from 'react'
import { APIProvider } from '@vis.gl/react-google-maps'

import { MapComponent } from '../../Components/MapCpmponent'
import { LostPetList } from '../../Components/LostPetList/indes'

import { getLostList } from '../../firebase/db/db'
import { getLostFromResponse } from '../../utils/getLostFromResponse'
import { useAppDispatch } from '../../store/hooks/hooks'

import { setPetData } from '../../store/petData/petDataSlice'

import style from './ContentPage.module.scss'

export const ContentPage: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchLost = async () => {
      try {
        const response = await getLostList()
        const pets = getLostFromResponse(response)
        dispatch(setPetData(pets))
      } catch {
        console.error()
      }
    }
    fetchLost()
  }, [])

  return (
    <section className={style.contentPage}>
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY || ''}>
        <aside className={style.aside}>
          <LostPetList />
        </aside>
        <main className={style.main}>
          <MapComponent />
        </main>
      </APIProvider>
    </section>
  )
}

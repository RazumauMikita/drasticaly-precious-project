import { FC, useCallback, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  AdvancedMarker,
  Map,
  MapMouseEvent,
  Pin,
 APIProvider } from '@vis.gl/react-google-maps'


import { StyledButton } from '../../StyledButton'

import {
  lostFormSchema,
  LostFormType,
} from '../../../utils/validation/lostPetFormSchema'
import { ERROR_MESSAGES } from '../../../constants/errorMessages'

import style from './LostForm.module.scss'

interface LatLngLiteral {
  lat: number
  lng: number
}

export const LostForm: FC = () => {
  const [location, setLocation] = useState<LatLngLiteral | null>(null)
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(lostFormSchema(ERROR_MESSAGES)),
  })
  const handleMapClick = (ev: MapMouseEvent) => {
    console.log(ev.detail.latLng)
    setLocation(ev.detail.latLng)
  }
  const onSubmit: SubmitHandler<LostFormType> = useCallback((data) => {
    console.log(data)
  }, [])
  return (
    <div>
      <form className={style.container} onSubmit={handleSubmit(onSubmit)}>
        <textarea
          {...register('description')}
          name="description"
          id="description"
        />

        <input type="file" {...register('images')} />
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY || ''}>
          <div className={style.mapContainer}>
            <Map
              onClick={handleMapClick}
              mapId={import.meta.env.VITE_MAP_ID}
              defaultCenter={{
                lat: 53.75092731376716,
                lng: 27.961652649164915,
              }}
              defaultZoom={6}
            >
              <AdvancedMarker position={location}>
                <Pin
                  background="#FBBC04"
                  glyphColor="#000"
                  borderColor="#000"
                />
              </AdvancedMarker>
            </Map>
          </div>
        </APIProvider>

        <StyledButton text="submit" type="submit" />
        <p>{errors.images?.message}</p>
      </form>
    </div>
  )
}

import { FC, useCallback, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  AdvancedMarker,
  Map,
  MapMouseEvent,
  Pin,
  APIProvider,
} from '@vis.gl/react-google-maps'

import { StyledButton } from '../../StyledButton'

import {
  lostFormSchema,
  LostFormType,
} from '../../../utils/validation/lostPetFormSchema'
import { ERROR_MESSAGES } from '../../../constants/errorMessages'
import { postLostFindPet } from '../../../requests/req'

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
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(lostFormSchema(ERROR_MESSAGES)),
  })
  const handleMapClick = (ev: MapMouseEvent) => {
    setLocation(ev.detail.latLng)
    if (ev.detail.latLng?.lat && ev.detail.latLng?.lng) {
      setValue('lat', ev.detail.latLng.lat)
      setValue('lng', ev.detail.latLng.lng)
    }
  }
  const onSubmit: SubmitHandler<LostFormType> = useCallback(async (data) => {
    const dataForm = new FormData()
    console.log(data)
    /* eslint-disable-next-line */
    for (const [key, value] of Object.entries(data)) {
      if (key === 'images') {
        const file = value as FileList
        dataForm.append(key, file[0])
      } else {
        dataForm.append(key, value as string)
      }
    }

    try {
      const response = await postLostFindPet(dataForm)
      if (response.ok) {
        console.log('Successful operation!')
      }
    } catch {
      console.log('server error lost request')
    }
  }, [])
  return (
    <form className={style.container} onSubmit={handleSubmit(onSubmit)}>
      <select id="isLostSelect" {...register('isLost')}>
        <option value="true">I Lost Pet</option>
        <option value="false">I Found Pet</option>
      </select>

      <div className={style.inputContainer}>
        <p>Description:</p>
        <textarea
          {...register('description')}
          name="description"
          id="description"
          rows={6}
          cols={40}
        />
      </div>

      <div className={style.inputContainer}>
        <p>Image:</p>
        <input id="images" type="file" {...register('images')} />
      </div>

      <div className={style.mapContainer}>
        <p>Lost location:</p>
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY || ''}>
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
              <Pin background="#FBBC04" glyphColor="#000" borderColor="#000" />
            </AdvancedMarker>
          </Map>
        </APIProvider>
      </div>

      <StyledButton text="submit" type="submit" />
      <p>
        {errors.images?.message}
        {errors.root?.message}
        {errors.isLost?.message}
        {errors.lat?.message}
        {errors.lng?.message}
      </p>
    </form>
  )
}

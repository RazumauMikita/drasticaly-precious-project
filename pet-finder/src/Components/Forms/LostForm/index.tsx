import { FC, useState } from 'react'
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

import { addLostOrFindPet, ISendLostPet } from '../../../firebase/db/db'

import {
  lostFormSchema,
  LostFormType,
} from '../../../utils/validation/lostPetFormSchema'
import { ERROR_MESSAGES } from '../../../constants/errorMessages'

import style from './LostForm.module.scss'
import { uploadFile } from '../../../firebase/storage/storage'

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
  const onSubmit: SubmitHandler<LostFormType> = async ({
    isLost,
    description,
    images,
    lat,
    lng,
  }) => {
    const fileList = images as FileList

    const fileUploadResult = await uploadFile(fileList[0] as File)

    console.log(fileUploadResult)

    const data: ISendLostPet = {
      isLost,
      description,
      images: fileUploadResult.ref.fullPath,
      lat,
      lng,
    }

    const doc = await addLostOrFindPet(data)

    console.log(doc)
  }
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

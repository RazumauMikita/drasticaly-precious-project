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
import { v4 as uuidv4 } from 'uuid'

import { useNavigate } from 'react-router-dom'
import { StyledButton } from '../../StyledButton'
import FormError from '../../FormError'

import { addLostOrFindPet, ISendLostPet } from '../../../firebase/db/db'
import { uploadImage } from '../../../requests/imgbb'

import {
  lostFormSchema,
  LostFormType,
} from '../../../utils/validation/lostPetFormSchema'
import { ERROR_MESSAGES } from '../../../constants/errorMessages'

import style from './LostForm.module.scss'
import { routes } from '../../../constants/routes'

interface LatLngLiteral {
  lat: number
  lng: number
}

export const LostForm: FC = () => {
  const [location, setLocation] = useState<LatLngLiteral | null>(null)
  const navigate = useNavigate()
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

    const fileUploadResult = await uploadImage(fileList[0] as File)

    const data: ISendLostPet = {
      id: uuidv4(),
      createdAt: Date.now(),
      isLost,
      description,
      images: fileUploadResult.data.image.url,
      lat,
      lng,
    }

    await addLostOrFindPet(data)
    navigate(routes.CONTENT)
  }
  return (
    <form className={style.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.customSelect}>
        <select id="isLostSelect" {...register('isLost')}>
          <option value="true">I Lost Pet</option>
          <option value="false">I Found Pet</option>
        </select>
      </div>

      <div className={style.inputContainer}>
        <p>Description:</p>
        <textarea
          {...register('description')}
          name="description"
          id="description"
          rows={6}
          cols={40}
        />
        {errors.description?.message && (
          <span className="text-sm text-red-700 font-medium -bottom-6 m-auto">
            {errors.description?.message}
          </span>
        )}
      </div>

      <div className={style.inputContainer}>
        <p>Image:</p>
        <input id="images" type="file" {...register('images')} />
        {errors.images?.message && (
          <FormError message={errors.images.message} />
        )}
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
        {errors.lat?.message && <FormError message={errors.lat?.message} />}
      </div>

      <StyledButton text="submit" type="submit" />
      {errors.root?.message && <FormError message={errors.root.message} />}
    </form>
  )
}

import { FC, useCallback, useEffect, useState } from 'react'
import { Map, useMap } from '@vis.gl/react-google-maps'

import { useSearchParams } from 'react-router-dom'
import { Point, PointMarker } from '../PointMarker'

import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { getLocations } from '../../utils/getLocations'
import { setShownPets } from '../../store/petData/petDataSlice'

import style from './MapComponent.module.scss'

export const MapComponent: FC = () => {
  const map = useMap()
  const { pets } = useAppSelector((state) => state.allPetData)
  const [location, setLocation] = useState({
    latitude: '53.75092731376716',
    longitude: '27.96165264916491',
  })
  const dispatch = useAppDispatch()
  const locations = getLocations(pets)
  const [searchParams] = useSearchParams()
  const mapZoom = searchParams.get('z') || '10'
  const mapLat =
    searchParams.get('lat') ||
    location.latitude.toString() ||
    '53.75092731376716'
  const mapLng =
    searchParams.get('lng') ||
    location.longitude.toString() ||
    '27.96165264916491'

  const onZoomChange = useCallback(() => {
    if (!map) return

    const bounds = map.getBounds()
    const queryParams = new URLSearchParams({
      z: map.getZoom()?.toString() || '10',
      lat: map.getCenter()?.lat().toString() || '53.75092731376716',
      lng: map.getCenter()?.lng().toString() || '27.96165264916491',
    })
    window.history.pushState({}, '', `?${queryParams.toString()}`)

    const visibleMarkersIds: Point[] = locations.filter((elem) =>
      bounds?.contains(elem.location)
    )
    dispatch(setShownPets(visibleMarkersIds))
  }, [map, locations, dispatch])

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude.toString(),
              longitude: position.coords.longitude.toString(),
            })
            console.log(location)
          },
          (error) => {
            console.error('Error getting location: ', error)
          }
        )
      } else {
        console.error('Geolocation is not supported by this browser.')
      }
    }
    getLocation()
  }, [])
  useEffect(() => {
    onZoomChange()
  }, [pets])

  return (
    <Map
      className={style.map}
      defaultZoom={parseFloat(mapZoom)}
      onZoomChanged={onZoomChange}
      mapId={import.meta.env.VITE_MAP_ID}
      defaultCenter={{ lat: parseFloat(mapLat), lng: parseFloat(mapLng) }}
      onBoundsChanged={onZoomChange}
    >
      <PointMarker />
    </Map>
  )
}

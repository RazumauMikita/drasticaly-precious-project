import { FC, useCallback, useEffect } from 'react'
import { Map, useMap } from '@vis.gl/react-google-maps'

import { Point, PointMarker } from '../PointMarker'

import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { getLocations } from '../../utils/getLocations'
import { setShownPets } from '../../store/petData/petDataSlice'

import style from './MapComponent.module.scss'

export const MapComponent: FC = () => {
  const map = useMap()
  const { pets } = useAppSelector((state) => state.allPetData)
  const dispatch = useAppDispatch()
  const locations = getLocations(pets)

  const onZoomChange = useCallback(() => {
    if (!map) return
    const bounds = map.getBounds()
    const visibleMarkersIds: Point[] = locations.filter((elem) =>
      bounds?.contains(elem.location)
    )
    dispatch(setShownPets(visibleMarkersIds))
  }, [map, locations, dispatch])

  useEffect(() => {
    onZoomChange()
  }, [pets])

  return (
    <Map
      className={style.map}
      defaultZoom={6}
      onZoomChanged={onZoomChange}
      mapId={import.meta.env.VITE_MAP_ID}
      defaultCenter={{ lat: 53.75092731376716, lng: 27.961652649164915 }}
      onBoundsChanged={onZoomChange}
    >
      <PointMarker />
    </Map>
  )
}

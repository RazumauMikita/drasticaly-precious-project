import { Dispatch, FC, SetStateAction } from 'react'
import { Map, useMap } from '@vis.gl/react-google-maps'

import { Point, PointMarker } from '../PointMarker'

import style from './MapComponent.module.scss'

interface MapComponentProps {
  locations: Point[]
  setShownLost: Dispatch<SetStateAction<Point[]>>
}
export const MapComponent: FC<MapComponentProps> = ({
  locations,
  setShownLost,
}) => {
  const map = useMap()

  const onZoomChange = () => {
    if (!map) return
    const bounds = map.getBounds()
    const visibleMarkersIds: Point[] = locations.filter((elem) =>
      bounds?.contains(elem.location)
    )

    setShownLost(visibleMarkersIds)
  }

  return (
    <Map
      className={style.map}
      defaultZoom={6}
      onZoomChanged={onZoomChange}
      mapId={import.meta.env.VITE_MAP_ID}
      defaultCenter={{ lat: 53.75092731376716, lng: 27.961652649164915 }}
      onBoundsChanged={onZoomChange}
    >
      <PointMarker points={locations} />
    </Map>
  )
}

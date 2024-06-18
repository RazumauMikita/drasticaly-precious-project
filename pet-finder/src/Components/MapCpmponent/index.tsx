import { Dispatch, FC, SetStateAction, useState } from 'react'
import { Map, useMap } from '@vis.gl/react-google-maps'
import { Marker } from '@googlemaps/markerclusterer'

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
  const [markers, setMarkers] = useState<{ [key: string]: Marker }>({})

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
      mapId="da37f3254c6a6d1c"
      defaultCenter={{ lat: 53.75092731376716, lng: 27.961652649164915 }}
    >
      <PointMarker
        points={locations}
        markers={markers}
        setMarkers={setMarkers}
      />
    </Map>
  )
}

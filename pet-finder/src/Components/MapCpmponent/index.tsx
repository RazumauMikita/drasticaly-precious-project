import { FC } from 'react'
import { Map } from '@vis.gl/react-google-maps'

import { Point, PointMarker } from '../PointMarker'

import style from './MapComponent.module.scss'

interface MapComponentProps {
  locations: Point[]
}
export const MapComponent: FC<MapComponentProps> = ({ locations }) => (
  <Map
    className={style.map}
    defaultZoom={6}
    mapId="da37f3254c6a6d1c"
    defaultCenter={{ lat: 53.75092731376716, lng: 27.961652649164915 }}
  >
    <PointMarker points={locations} />
  </Map>
)

import { FC } from 'react'
import { Map, MapCameraChangedEvent } from '@vis.gl/react-google-maps'

import { Point, PointMarker } from '../PointMarker'

import style from './MapComponent.module.scss'

/* const locations: Point[] = [
  {
    key: '1',
    location: { lat: 53.75092731376716, lng: 27.961652649164915 },
    isLost: true,
  },
  {
    key: '2',
    location: { lat: 53.871381561389526, lng: 27.541528874011075 },
    isLost: true,
  },
  {
    key: '3',
    location: { lat: 53.88683592502887, lng: 27.595413762036436 },
    isLost: false,
  },
  {
    key: '4',
    location: { lat: 53.87960773338487, lng: 27.574554168459308 },
    isLost: false,
  },
] */

interface MapComponentProps {
  locations: Point[]
}
export const MapComponent: FC<MapComponentProps> = ({ locations }) => (
  <Map
    className={style.map}
    defaultZoom={6}
    mapId="da37f3254c6a6d1c"
    defaultCenter={{ lat: 53.75092731376716, lng: 27.961652649164915 }}
    onCameraChanged={(ev: MapCameraChangedEvent) =>
      console.log(ev.detail.center.lat, ev.detail.center.lng)
    }
  >
    <PointMarker points={locations} />
  </Map>
)

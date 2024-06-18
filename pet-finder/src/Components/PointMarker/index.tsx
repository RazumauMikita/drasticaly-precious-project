/* eslint-disable no-undef */
import {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import {
  AdvancedMarker,
  InfoWindow,
  Pin,
  useMap,
} from '@vis.gl/react-google-maps'
import { Marker, MarkerClusterer } from '@googlemaps/markerclusterer'

import { baseURL } from '../../requests/constants'

import style from './PointMarker.module.scss'

export interface Point {
  key: string
  location: google.maps.LatLngLiteral
  isLost: boolean
  description: string
  createdAt: number
  images: string[]
}

interface PointMarkerProps {
  points: Point[]
  markers: { [key: string]: Marker }
  setMarkers: Dispatch<SetStateAction<{ [key: string]: Marker }>>
}

export const PointMarker: FC<PointMarkerProps> = ({
  points,
  markers,
  setMarkers,
}) => {
  const map = useMap()
  const clusterer = useRef<MarkerClusterer | null>(null)
  const [selectedPointKey, setSelectedPointKey] = useState<string | null>(null)
  const [selectedLost, setSelectedLost] = useState<Point | null>(null)
  const [infoWindowShown, setInfoWindowShown] = useState(false)
  const handleClose = useCallback(() => setInfoWindowShown(false), [])

  const handleClick = useCallback(
    (ev: google.maps.MapMouseEvent, lost: Point) => {
      if (!map) return
      if (!ev.latLng) return
      console.log('marker clicked: ', ev.latLng.toString())
      map.panTo(ev.latLng)

      setSelectedPointKey(lost.key)
      setSelectedLost(lost)
      setInfoWindowShown((isShown) => !isShown)
    },
    [map]
  )

  useEffect(() => {
    if (!map) return
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map })
    }
  }, [map])

  useEffect(() => {
    clusterer.current?.clearMarkers()
    clusterer.current?.addMarkers(Object.values(markers))
  }, [markers])

  const setMarkerRef = (marker: Marker | null, key: string) => {
    if (marker && markers[key]) return
    if (!marker && !markers[key]) return

    setMarkers((prev) => {
      if (marker) {
        return { ...prev, [key]: marker }
      }
      const newMarkers = { ...prev }
      delete newMarkers[key]
      return newMarkers
    })
  }

  return (
    <div className={style.pointContainer}>
      {points &&
        points.map((poi: Point) => (
          <AdvancedMarker
            key={poi.key}
            position={poi.location}
            ref={(marker) => setMarkerRef(marker, poi.key)}
            clickable
            onClick={(ev) => handleClick(ev, poi)}
          >
            <Pin
              background={poi.isLost ? `#FBBC04` : '#FF0000'}
              glyphColor="#000"
              borderColor="#000"
            />
          </AdvancedMarker>
        ))}
      {infoWindowShown && selectedPointKey && (
        <InfoWindow anchor={markers[selectedPointKey]} onClose={handleClose}>
          <img alt="Pet" src={`${baseURL}${selectedLost?.images[0]}`} />
          <h2>InfoWindow content!</h2>
          <p>created at:{selectedLost?.createdAt}</p>
          <p>description: {selectedLost?.description}</p>
          <p>Some arbitrary html to be rendered into the InfoWindow.</p>
        </InfoWindow>
      )}
    </div>
  )
}

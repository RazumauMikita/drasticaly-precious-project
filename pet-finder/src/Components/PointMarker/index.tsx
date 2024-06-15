/* eslint-disable no-undef */
import { FC, useCallback, useEffect, useRef, useState } from 'react'
import { AdvancedMarker, Pin, useMap } from '@vis.gl/react-google-maps'
import { Marker, MarkerClusterer } from '@googlemaps/markerclusterer'

import style from './PointMarker.module.scss'

export interface Point {
  key: string
  location: google.maps.LatLngLiteral
  isLost: boolean
}

interface PointMarkerProps {
  points: Point[]
}

export const PointMarker: FC<PointMarkerProps> = ({ points }) => {
  const map = useMap()
  const [markers, setMarkers] = useState<{ [key: string]: Marker }>({})
  const clusterer = useRef<MarkerClusterer | null>(null)
  const handleClick = useCallback(
    (ev: google.maps.MapMouseEvent) => {
      if (!map) return
      if (!ev.latLng) return
      console.log('marker clicked: ', ev.latLng.toString())
      map.panTo(ev.latLng)
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
      {points.map((poi: Point) => (
        <AdvancedMarker
          key={poi.key}
          position={poi.location}
          ref={(marker) => setMarkerRef(marker, poi.key)}
          clickable
          onClick={handleClick}
        >
          <Pin
            background={poi.isLost ? `#FBBC04` : '#FF0000'}
            glyphColor="#000"
            borderColor="#000"
          />
        </AdvancedMarker>
      ))}
    </div>
  )
}

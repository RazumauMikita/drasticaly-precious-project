import { Point } from '../Components/PointMarker'
import { ILost } from '../requests/interfaces'

export const getLocations = (lostArray: ILost[]): Point[] => {
  const result = lostArray.map((elem) => {
    const point: Point = {
      key: elem.id,
      isLost: elem.isLost,
      location: {
        lat: elem.lat,
        lng: elem.lng,
      },
    }
    return point
  })
  return result
}

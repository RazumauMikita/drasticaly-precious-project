import { Point } from '../Components/PointMarker'

import { ISendLostPet } from '../firebase/db/db'

export const getLocations = (lostArray: ISendLostPet[]): Point[] => {
  const result = lostArray.map((elem) => {
    const point: Point = {
      key: elem.id,
      isLost: elem.isLost,
      location: {
        lat: elem.lat,
        lng: elem.lng,
      },
      createdAt: elem.createdAt,
      description: elem.description,
      images: elem.images,
    }
    return point
  })
  return result
}

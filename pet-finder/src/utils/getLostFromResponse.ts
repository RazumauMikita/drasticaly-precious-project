import { DocumentData, QuerySnapshot } from 'firebase/firestore'
import { ISendLostPet } from '../firebase/db/db'

export const getLostFromResponse = (
  response: QuerySnapshot<DocumentData, DocumentData>
) => {
  const result: ISendLostPet[] = response.docs.map(
    (elem) => elem.data() as ISendLostPet
  )
  return result
}

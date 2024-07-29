import { DocumentData, QuerySnapshot } from 'firebase/firestore'

export const getLostFromResponse = (
  response: QuerySnapshot<DocumentData, DocumentData>
) => {
  const result: DocumentData[] = response.docs.map((elem) => elem.data())
  return result
}

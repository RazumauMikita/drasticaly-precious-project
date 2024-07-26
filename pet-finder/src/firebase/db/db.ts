import { initializeApp } from 'firebase/app'
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore'

import { firebaseConfig } from './db.config'

interface ISendLostPet {
  description: string
  images: string
  isLost: boolean
  lng: number
  lat: number
}

enum collectionsPath {
  LOST = 'lost',
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

const addLostOrFindPet = async (data: ISendLostPet) => {
  try {
    const docRef = await addDoc(collection(db, collectionsPath.LOST), data)
    console.log('Document written with ID: ', docRef.id)
    return docRef
  } catch (e) {
    console.error('Error adding document: ', e)
  }
  return undefined
}

const getLostList = async () => {
  const querySnapshot = await getDocs(collection(db, collectionsPath.LOST))
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${JSON.stringify(doc.data())}`)
  })
  return querySnapshot
}

export { db, addLostOrFindPet, getLostList }
export type { ISendLostPet }

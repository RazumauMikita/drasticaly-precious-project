import { initializeApp } from 'firebase/app'
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore'

import { firebaseConfig } from '../db.config'

interface ISendLostPet {
  id: string
  description: string
  images: string
  isLost: boolean
  lng: number
  lat: number
  createdAt: number
}

enum collectionsPath {
  LOST = 'lost',
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

const addLostOrFindPet = async (data: ISendLostPet) => {
  try {
    const docRef = await addDoc(collection(db, collectionsPath.LOST), data)
    return docRef
  } catch (e) {
    console.error('Error adding document: ', e)
  }
  return undefined
}

const getLostList = async () => {
  const querySnapshot = await getDocs(collection(db, collectionsPath.LOST))
  return querySnapshot
}

export { db, app, addLostOrFindPet, getLostList }
export type { ISendLostPet }

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBLQuQsQVhebmtZqGkStPJM0SaHNnrLxnM',
  authDomain: 'lost-next.firebaseapp.com',
  projectId: 'lost-next',
  storageBucket: 'lost-next.appspot.com',
  messagingSenderId: '348415550222',
  appId: '1:348415550222:web:e819c41bf203efbb48ed5f',
  measurementId: 'G-VC5E84NZ1H',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

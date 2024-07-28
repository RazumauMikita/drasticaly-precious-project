import { getStorage, ref, uploadBytes } from 'firebase/storage'

import { app } from '../db/db'

const storage = getStorage(app)

const uploadFile = async (file: File) => {
  const imagesRef = ref(storage, `images/${file.name}`)
  const response = await uploadBytes(imagesRef, file)
  return response
}

export { uploadFile }

export interface ImgBBImageDetails {
  filename: string
  name: string
  mime: string
  extension: string
  url: string
}

export interface ImgBBData {
  id: string
  title: string
  url_viewer: string
  url: string
  display_url: string
  width: string
  height: string
  size: string
  time: string
  expiration: string
  image: ImgBBImageDetails
  thumb: ImgBBImageDetails
  medium: ImgBBImageDetails
  delete_url: string
}
export interface ImgBBResponse {
  data: ImgBBData
  success: boolean
  status: number
}

export const uploadImage = async (image: File): Promise<ImgBBResponse> => {
  const formData = new FormData()
  formData.append('image', image)
  const response = await fetch(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
    {
      method: 'POST',
      body: formData,
    }
  )
  const data = await response.json()
  return data
}

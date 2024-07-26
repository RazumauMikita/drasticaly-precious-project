interface IDataToFormData {
  isLost?: boolean | undefined
  images: string
  description: string
  lat: number
  lng: number
}

export const formDataCreate = (data: IDataToFormData) => {
  const dataForm = new FormData()
  /* eslint-disable-next-line */
  for (const [key, value] of Object.entries(data)) {
    if (key === 'images') {
      const file = value as FileList
      dataForm.append(key, file[0])
    } else {
      dataForm.append(key, value as string)
    }
  }
}

export interface DateTimeObject {
  dateTime: string
  time: string
}

export const formatDateTime = (milliseconds: number): DateTimeObject => {
  const date = new Date(milliseconds)

  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0') // Months are zero-based
  const year = date.getFullYear()

  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')

  return {
    dateTime: `${day}.${month}.${year}`,
    time: `${hours}:${minutes}`,
  }
}

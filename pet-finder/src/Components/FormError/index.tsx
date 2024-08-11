import React from 'react'

interface FormErrorProps {
  message: string
}

const FormError: React.FC<FormErrorProps> = ({ message }) => {
  if (!message) return null

  return (
    <div className="text-sm text-red-700 font-medium -bottom-6 m-auto">
      {message}
    </div>
  )
}

export default FormError

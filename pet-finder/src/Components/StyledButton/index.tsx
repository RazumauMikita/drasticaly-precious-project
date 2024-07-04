import { FC, MouseEvent } from 'react'

type ButtonOnclick = (event?: MouseEvent<HTMLButtonElement>) => void

interface StyledButtonProps {
  type: 'submit' | 'button' | 'reset'
  text: string
  disabled?: boolean
  style?: string
  callback?: ButtonOnclick
}

export const StyledButton: FC<StyledButtonProps> = ({
  type,
  text,
  disabled = false,

  callback = () => {},
}) => (
  <button
    className="w-32 m-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center"
    type={type}
    disabled={disabled}
    onClick={(event) => callback(event)}
    key={text}
  >
    {text}
  </button>
)

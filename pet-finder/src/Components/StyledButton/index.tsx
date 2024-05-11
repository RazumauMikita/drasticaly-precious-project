import { FC, MouseEvent } from 'react'

import styles from './StyledButton.module.scss'

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
  style = '',
  callback = () => {},
}) => (
  <button
    className={`${styles.styledButton} ${style}`}
    type={type}
    disabled={disabled}
    onClick={(event) => callback(event)}
    key={text}
  >
    {text}
  </button>
)

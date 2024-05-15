import { FC } from 'react'

import styles from './RegistrationForm.module.scss'

interface RegistrationFormProps {}

export const RegistrationForm: FC<RegistrationFormProps> = () => (
  <form className={styles.registrationForm}>RegistrationForm</form>
)

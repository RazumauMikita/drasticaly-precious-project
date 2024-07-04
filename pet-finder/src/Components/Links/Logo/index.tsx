import { FC } from 'react'
import { Link } from 'react-router-dom'

import { routes } from '../../../constants/routes'

export const Logo: FC = () => (
  <Link to={routes.HOME}>
    <h1 className="text-4xl font-medium">🐕 Find my pet</h1>
  </Link>
)

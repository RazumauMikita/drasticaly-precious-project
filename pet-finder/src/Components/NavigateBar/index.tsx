import { FC } from 'react'
import { Link } from 'react-router-dom'

import { routes } from '../../constants/routes'

const navRoutes = [
  [routes.HOME, 'Home'],
  [routes.CONTENT, 'Lost map'],
  [routes.LOST_FORM, 'Lost form'],
]

export const NavigateBar: FC = () => (
  <nav className="flex aline-center justify-center">
    <ul className="w-full flex flex-row flex-wrap aline-center justify-between gap-10">
      {navRoutes.map(([route, title]) => (
          <li className="text-xl text-white hover:opacity-80" key={route}>
            <Link to={route}>{title}</Link>
          </li>
        ))}
    </ul>
  </nav>
)

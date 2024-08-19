import { FC } from 'react'
import { Link } from 'react-router-dom'

import { routes } from '../../../constants/routes'
import { buttonsText } from '../../../constants/texts'

export const LoginLink: FC = () => (
  <Link
    className="flex flex-row justify-center items-center gap-1 font-medium bg-slate-500 hover:bg-slate-700 rounded-3xl px-2 py-1 transition ease-in-out duration-500"
    to={routes.LOGIN}
  >
    <span>{buttonsText.LOG_IN}</span> <span>🠮</span>
  </Link>
)

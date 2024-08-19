import { FC } from 'react'

import style from './HomePage.module.scss'
import { useNavigate } from 'react-router-dom'
import { routes } from '../../constants/routes'

export const HomePage: FC = () => {
  const navigate = useNavigate()
  const lostBtnHandle = () => {
    navigate(routes.LOST_FORM)
  }
  const findBtnHandle = () => {
    navigate(routes.LOST_FORM)
  }

  return (
    <section className={style.homePage}>
      <div className={style.container}>
        <div className={style.btnContainer}>
          <button className={style.btnLost} onClick={lostBtnHandle}>
            REPORT LOST PET
          </button>
          <button className={style.btnFind} onClick={findBtnHandle}>
            REPORT FIND PET
          </button>
        </div>
        <h1>Welcome to PetFinder!</h1>

        <div className={style.section}>
          <h2>What is PetFinder?</h2>
          <p>
            PetFinder is a dedicated platform designed to help reunite lost pets
            with their owners. Whether you've lost a pet or found one, our site
            provides a simple and effective way to report and search for missing
            animals.
          </p>
        </div>

        <div className={style.section}>
          <h2>User Cases</h2>
          <p>
            <strong>Lost a Pet:</strong> If your pet has gone missing, you can
            create a report by uploading a photo, setting the location on the
            map, and providing a description. This helps others in your area
            keep an eye out for your furry friend.
          </p>
          <p>
            <strong>Found a Pet:</strong> If you've found a pet wandering alone,
            you can report it by uploading a photo, marking the location on the
            map, and adding a description. This increases the chances of the pet
            being reunited with its owner.
          </p>
        </div>

        <div className={style.section}>
          <h2>How PetFinder Can Help</h2>
          <p>
            <strong>Community Support:</strong> By leveraging the power of
            community, PetFinder increases the chances of finding lost pets
            quickly. Users in the vicinity can see reports and help look out for
            missing pets.
          </p>
          <p>
            <strong>Easy Reporting:</strong> Our user-friendly interface makes
            it simple to report lost or found pets. Just fill out a form, upload
            a photo, and set the location on the map.
          </p>
          <p>
            <strong>Real-Time Updates:</strong> Stay updated with real-time
            notifications about lost and found pets in your area.
          </p>
        </div>

        <div className={style.section}>
          <h2>How to Use PetFinder</h2>
          <ol className={style.instructions}>
            <li>
              <strong>Create an Account:</strong> Sign up to start using
              PetFinder.
            </li>
            <li>
              <strong>Report a Lost or Found Pet:</strong> Fill out the form
              with the necessary details, including a photo, location, and
              description.
            </li>
            <li>
              <strong>Search for Pets:</strong> Browse through the reports to
              find your lost pet or see if anyone has reported finding a pet
              that matches the description of one you've found.
            </li>
            <li>
              <strong>Get Notified:</strong> Receive notifications about new
              reports in your area to stay informed and help others.
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}

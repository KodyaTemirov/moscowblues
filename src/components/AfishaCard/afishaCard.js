import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import * as s from "./afishaCard.module.scss"

const AfishaCard = ({ title, text, buttonLabel, buttonLink }) => (
  <div className={s.afisha}>
    <div className={s.afishaInfo}>
      <h5 className={s.afishaTitle}>{title}</h5>
      <p className={s.afishaText}>{text}</p>
      <Link to={buttonLink} className={s.afishaLink}>
        {buttonLabel}
      </Link>
    </div>
  </div>
)

export default AfishaCard

AfishaCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
}

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import * as s from "./statistics.module.scss"

const Statistics = ({ num, text, buttonLabel, buttonLink }) => (
  <div className={s.statistics}>
    <div>
      <div className={s.statisticsNum}>{num}+</div>
    </div>
    <div className={s.statisticsInfo}>
      <p className={s.statisticsText}>{text}</p>
      <Link to={buttonLink} className={s.statisticsLink}>
        {buttonLabel}
      </Link>
    </div>
  </div>
)

export default Statistics

Statistics.propTypes = {
  num: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
}

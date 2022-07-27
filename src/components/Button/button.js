import React from "react"
import PropTypes from "prop-types"

import * as s from "./button.module.scss"
import clsx from "clsx"

const Button = ({ label, type = "medium" }) => (
  <button className={clsx(s.button, { [s.large]: type === "large" })}>
    {label}
  </button>
)

export default Button

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["medium", "large"]),
}

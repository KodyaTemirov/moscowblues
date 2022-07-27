import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import * as s from "./paragraph.module.scss"

const Paragraph = ({ children, className }) => (
  <p className={clsx(s.text, className)}>{children}</p>
)

export default Paragraph

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
}

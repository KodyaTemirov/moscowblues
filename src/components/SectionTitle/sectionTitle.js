import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import * as s from "./sectionTitle.module.scss"

const SectionTitle = ({ children, className }) => (
  <h4 className={clsx(s.title, className)}>{children}</h4>
)

export default SectionTitle

SectionTitle.propTypes = {
  children: PropTypes.element.isRequired,
}

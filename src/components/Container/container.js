import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import * as s from "./container.module.scss"

const Container = ({ children, className }) => (
  <div className={clsx(s.container, className)}>{children}</div>
)

export default Container

Container.propTypes = {
  children: PropTypes.element.isRequired,
}

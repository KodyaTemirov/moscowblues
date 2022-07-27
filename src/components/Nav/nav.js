import React from "react"
import * as s from "./nav.module.scss"
import { Link } from "gatsby"

import PropTypes from "prop-types"

const Nav = ({ menuItems }) => (
  <nav>
    <ul className={s.menuList}>
      {menuItems.map(({ id, title, link }) => {
        return (
          <li className={s.menuItem}>
            <Link to={link} className={s.menuLink}>
              {title}
            </Link>
          </li>
        )
      })}
    </ul>
  </nav>
)

export default Nav

Nav.propTypes = {
  menuItems: PropTypes.array,
}

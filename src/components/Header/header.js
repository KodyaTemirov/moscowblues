import React from "react"
import PropTypes from "prop-types"
import Nav from "../Nav"
import Container from "../Container"
import * as s from "./header.module.scss"

const Header = ({ siteTitle, menuItems }) => (
  <header className={s.header}>
    <Container>
      <Nav menuItems={menuItems} />
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  menuItems: PropTypes.array,
}

Header.defaultProps = {
  siteTitle: ``,
  menuItems: [
    {
      id: "1",
      title: "О нас",
      link: "#about",
    },
    {
      id: "2",
      title: "Афиша",
      link: "#",
    },
    {
      id: "3",
      title: "Кто мы",
      link: "#",
    },
    {
      id: "4",
      title: "Контакты",
      link: "#",
    },
    {
      id: "5",
      title: "Поддержать",
      link: "#",
    },
    {
      id: "6",
      title: "Записаться на матч",
      link: "#",
    },
  ],
}

export default Header

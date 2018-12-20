import React from "react";
import { Container } from "components";
import Nav from "./Nav";
import NavLink from "./NavLink";
import styles from "./styles.module.css";
import navLinks from "config/menu.js";
import logo from '../../../images/logo.jpg'

export default () => {
  const nav = navLinks.map(link => (
    <NavLink key={link.path} to={link.path}>
      {link.text}
    </NavLink>
  ));

  return (
    <header className={styles.Header}>
      <Container className={styles.Container}>
        <a href="/" ><img src ={logo} alt="Logo" className="responsive-logo" width="50px" height="50px"/> </a>
        <Nav>{nav}</Nav>
      </Container>
    </header>
  );
};

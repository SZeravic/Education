import React from "react";
import Container from "../Container";
import Nav from "./Nav";
import NavLink from "./NavLink";
import styles from "./styles.module.css";
import heading from "../../assets/images/heading.png";
import user from "../../assets/images/user.png";

export default () => (
  <header className={styles.Header}>
    <Container className={styles.Container}>

      <a className={styles.Logo} href="/">
        <img className={styles.Img} src={heading} />
      </a>

      <aside className={styles.Aside_top}>
        <label className={styles.Label_user}>Guest user</label>
        <img className={styles.Account_img} src={user} />
      </aside>

      <aside className={styles.Aside_bottom}>
        <Nav>
          <NavLink to="/" exact="true">Home</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/log-in">Log In</NavLink>
        </Nav>
      </aside>

    </Container>
  </header>
);

import React from "react";
import NavLink from "./NavLink";

import styles from "./styles.module.css";


export default () => (
  <div className={styles.nav}>
    <span id={styles.title}>Money Today</span>
    <span id={styles.login}>login / register </span>
    <nav className={styles.navBar}>
      <span className={styles.navBarElContainer}>
        <NavLink to="/">News</NavLink>
        <NavLink to="/">Analysis</NavLink>
        <NavLink to="/">Shop</NavLink>
        <NavLink to="/about/">About</NavLink>
        <NavLink to="/contact/">Contact</NavLink>
      </span>
      <input className={styles.navBarElSearch} type="text" placeholder="Search..." />
    </nav>
  </div>
);

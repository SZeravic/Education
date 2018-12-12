import React from "react";
import Nav from "./Nav";
import NavLink from "./NavLink";
import Container from "../Container";
import styles from "./styles.module.css";

 export default () => (
     <header className={styles.Header}>
         <Container className={styles.Container}>
             <span className={styles.Logo}>Sustav Za Zaposljavanje</span>
             <Nav>
                 <NavLink to="/" exact="true">Home</NavLink>
                 <NavLink to="/Poslodavci/">Poslodavci</NavLink>
                 <NavLink to="/Posloprimci/">Posloprimci</NavLink>
                 <NavLink to="/Pomoć/">Pomoć</NavLink>
                 <NavLink to="/Prijava/">Prijava</NavLink>
             </Nav>
         </Container>
     </header>
 );
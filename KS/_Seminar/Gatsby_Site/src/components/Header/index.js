import React from "react";
 import Nav from "./Nav";
 import NavLink from "./NavLink";

//  export default () => (
//      <header className={styles.Header}>
//          <Container className={styles.Container}>
//              <span className={styles.Logo}>Gatsby</span>
//              <Nav>
//                  <NavLink to="/" exact="true">Home</NavLink>
//                  <NavLink to="/second-page/">Second page</NavLink>
//                  <NavLink to="/about/">About</NavLink>
//              </Nav>
//          </Container>
//      </header>
//  );

export default () => (
    <header class="items">
    <Nav>
        <NavLink/>
    </Nav>
    </header>
)
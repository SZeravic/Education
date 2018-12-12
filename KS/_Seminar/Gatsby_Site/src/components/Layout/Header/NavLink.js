import React from "react";


// export default () => (
//     <>
//     {/* <div id="logo">
//         <a> Sustav Za Zapošljavanje </a> 
//     </div> */}
//     <ul class="nav-bar">
//         <li class="nav-active"><a class="active" href="index.html">Home</a></li>
//         <li class="nav-block"><a class="block" href="Posloprimci.html">Posloprimci</a></li>
//         <li class="nav-block"><a class="block" href="Poslodavci.html">Poslodavci</a></li>
//         <li class="nav-block"><a class="block" href="Prijava.html">Prijava</a></li>
//         <li class="nav-block"><a class="block" href="Pomoć.html">Pomoć</a></li>
//     </ul>
//     </>
// );

import { Link } from "gatsby";
import styles from "./styles.module.css";

export default ({ children, ...rest }) => (
    <Link
        className={styles.NavLink}
        activeClassName={styles.NavLink__active}
        {...rest}
    >
        {children}
    </Link>
);
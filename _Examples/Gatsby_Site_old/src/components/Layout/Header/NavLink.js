import React from "react";


// export default () => (
//     <>
//     {/* <div id="logo">
//         <a> Sustav Za Zapošljavanje </a> 
//     </div> */}
//     <ul className="nav-bar">
//         <li className="nav-active"><a className="active" href="index.html">Home</a></li>
//         <li className="nav-block"><a className="block" href="Posloprimci.html">Posloprimci</a></li>
//         <li className="nav-block"><a className="block" href="Poslodavci.html">Poslodavci</a></li>
//         <li className="nav-block"><a className="block" href="Prijava.html">Prijava</a></li>
//         <li className="nav-block"><a className="block" href="Pomoć.html">Pomoć</a></li>
//     </ul>
//     </>
// );

import { Link } from "gatsby";
import styles from "../../../styles/styles.module.css";

export default ({ children, ...rest }) => (
    <Link
        className={styles.NavLink}
        activeClassName={styles.NavLink_active}
        {...rest}
    >
        {children}
    </Link>
);
import React from "react";
//import { Link } from "gatsby";

// export default ({ children, ...rest }) => (
//     <Link
//         className={styles.NavLink}
//         activeClassName={styles.NavLink__active}
//         {...rest}
//     >
//         {children}
//     </Link>
// );

export default () => (
    <ul class="nav-bar">
        <li class="nav-active"><a class="active" href="index.html">Home</a></li>
        <li class="nav-block"><a class="block" href="Posloprimci.html">Posloprimci</a></li>
        <li class="nav-block"><a class="block" href="Poslodavci.html">Poslodavci</a></li>
        <li class="nav-block"><a class="block" href="Prijava.html">Prijava</a></li>
        <li class="nav-block"><a class="block" href="Pomoć.html">Pomoć</a></li>
    </ul>
);
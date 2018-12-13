import React from "react";
import styles from "../../../styles/styles.module.css";

export default ({ children }) => (
    <div className={styles.Site_Container}>
        {children}
    </div>
);
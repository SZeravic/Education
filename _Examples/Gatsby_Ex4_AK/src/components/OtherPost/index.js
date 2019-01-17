import React from "react";
import style from "./styles.module.css";

export default ({ title, children }) => (
    <div className={style.main}>
        <div id={style.image}></div>
        <div id={style.desc}>
            <span>{title}</span>
            <hr />
            <span id={style.textDesc}>{children}</span>
        </div>
    </div >
);
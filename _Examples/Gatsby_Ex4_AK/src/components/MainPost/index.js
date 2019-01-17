import React from "react";
import style from "./styles.module.css";

export default ({ title, children }) => (
  <div class={style.mainStory}>
    <div class={style.mainImg}>ju</div>
    <div class={style.mainText}>
      <p class={style.title}>{title}</p>
      <hr />
      <p>{children}</p>
    </div>
  </div>
);

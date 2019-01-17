import React from "react";
import style from "./styles.module.css";

export default ({ title, children }) => (
  <div className={style.secondStory}>
    <div id={style.secondStory1}>
      <div id={style.image} />
      <p className={style.title}>Title</p>
      <hr />
      <p>
        belief, Lorem Ipsum e mor on the theory of ethics, very populaical lite
        cal literature, discover on the theory of ethics, very popular during
        the Renaissance. The belief, Lorem Ipsum e mor on the theory lite cal
        literature, discover on the theory of ethics, very popular during the
        Renaissance. The
      </p>
    </div>
    <div id={style.secondStory2}>
      <div id={style.image} />
      <p className={style.title}>Title</p>
      <hr />
      <p>
        belief, Lorem Ipsum e mor on the theory of ethics, very populaical lite
        cal literature, discover on the theory of ethics, very popular during
        the Renaissance. The belief, Lorem Ipsum e mor on the theory lite cal
        literature, discover on the theory of ethics, very popular during the
        Renaissance. The
      </p>
    </div>
  </div>
);

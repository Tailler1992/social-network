import React from "react";

import s from "./Dialogs.module.scss";
import {NavLink} from "react-router-dom";

const Dialogs = () => {
  return (
      <div className={s.dialogs}>
        <ul className={s.dialogList}>
          <li>
            <NavLink to={"1"} className={s.dialog}>
              <div className={s.dialogPhoto}></div>
              <div className={s.dialogName}>
                Gena
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to={"2"} className={s.dialog}>
              <div className={s.dialogPhoto}></div>
              <div className={s.dialogName}>
                Lena
              </div>
            </NavLink>
          </li>
        </ul>


        <div className={s.messages}>
          <div className={s.message}>1</div>
          <div className={s.message}>2</div>
          <div className={s.message}>3</div>
        </div>
      </div>

  );
};

export default Dialogs;

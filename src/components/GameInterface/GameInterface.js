import React from "react";
import s from "./index.module.css";
import FieldList from "../FieldList";

const GameInterface = props => {
  return (
    <div className={s.gameInterface}>
      <div className={s.actionBlock}>
        <select className={s.select} >
          <option>Pick game mode</option>
          <option>Easy Mode</option>
          <option>Normal Mode</option>
          <option>Hard Mode</option>
        </select>
        <input className={s.inputName} type="text" placeholder="Enter your name" />
        <button className={s.btn}>PLAY</button>
      </div>
      <div className={s.message}>
        <p className={s.messageText}>Message</p>
      </div>
      <div className={s.fieldList}>
        <FieldList />
      </div>
    </div>
  );
};

export default GameInterface;

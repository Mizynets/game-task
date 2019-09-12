import React from "react";
import s from "./index.module.css";
import FieldList from "../FieldList";

const GameInterface = ({
  selectValue,
  inputName,
  handleChangeSelect,
  handleChangeInputName,
  onHandlePlay,
  gameMode
}) => {
  return (
    <div className={s.gameInterface}>
      <div className={s.actionBlock}>
        <select
          className={s.select}
          value={selectValue}
          onChange={handleChangeSelect}
        >
          <option defaultValue>Pick game mode</option>
          <option value={gameMode.easyMode.field}>Easy Mode</option>
          <option value={gameMode.normalMode.field}>Normal Mode</option>
          <option value={gameMode.hardMode.field}>Hard Mode</option>
        </select>
        <input
          className={s.inputName}
          type="text"
          placeholder="Enter your name"
          value={inputName}
          onChange={handleChangeInputName}
        />
        <button className={s.btn} onClick={onHandlePlay}>
          PLAY
        </button>
      </div>

      <div className={s.message}>
        <p className={s.messageText}>Message</p>
      </div>

      <div className={s.fieldList}>
        <FieldList fieldSize={selectValue}/>
      </div>
    </div>
  );
};

export default GameInterface;

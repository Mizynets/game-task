import React, { Component } from "react";
import s from "./index.module.css";
import uid from "uid";

class FieldList extends Component {
  componentDidUpdate = prevProps => {
    const { startGameSelect, playGame } = this.props;
    if (playGame !== prevProps.playGame) {
      setTimeout(startGameSelect,2000)
    }
  };

  render() {
    const {
      propertiesList,
      selectValue,
      isUserSelected,
      isSelected,
      isComputerSelected,
      selectedUser
    } = this.props;

    const fieldSizeList = +selectValue;
    const classes =
      fieldSizeList === 5
        ? `${s.item_basis_5}`
        : fieldSizeList === 10
        ? `${s.item_basis_10}`
        : fieldSizeList === 15
        ? `${s.item_basis_15}`
        : null;

    const listItem = propertiesList.length ? (
      propertiesList.map((el, indx) => {
        return (
          <li
            onClick={selectedUser}
            data-id={indx}
            key={uid()}
            className={`${s.item} ${classes}`}
            style={{
              background: isUserSelected(el)
                ? "forestgreen"
                : isComputerSelected(el)
                ? "red"
                : isSelected(el)
                ? "gray"
                : "white"
            }}
          >
            1
          </li>
        );
      })
    ) : (
      <h2>Pleae Select MODE</h2>
    );

    return (
      <div className={s.fieldList}>
        <ul className={s.list}>{listItem}</ul>
      </div>
    );
  }
}

export default FieldList;

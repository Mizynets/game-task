import React, { Component } from "react";
import s from "./index.module.css";
import uid from "uid";

class FieldList extends Component {
  
  createClasses = (selectValue) => {
    const fieldSizeList = +selectValue;
    return fieldSizeList === 5
        ? `${s.item_basis_5}`
        : fieldSizeList === 10
        ? `${s.item_basis_10}`
        : fieldSizeList === 15
        ? `${s.item_basis_15}`
        : null;
  } 

render() {
    const {
      propertiesList,
      selectValue,
      isUserSelected,
      isSelected,
      isComputerSelected,
      selectedUser,
    } = this.props;

    
    const classes = this.createClasses(selectValue);

    const listItem = (
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
          </li>
        );
      })
    ) 

    return (
      <div className={s.fieldList}>
        <ul className={s.list}>{listItem}</ul>
      </div>
    );
  }
}

export default FieldList;

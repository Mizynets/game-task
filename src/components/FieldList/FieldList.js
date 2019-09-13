import React, { Component } from 'react';
import s from './index.module.css';
import uid from 'uid';

class FieldList extends Component {

    render(){
    const { fieldSize } = this.props;
    const fieldSizeList = +fieldSize;
    const classes = 
    fieldSizeList === 5 ? `${s.item_basis_5}` :
    fieldSizeList === 10 ? `${s.item_basis_10}` :
    fieldSizeList === 15 ? `${s.item_basis_15}`: null;
        
        if(!!fieldSizeList){
            const propertiesList = Array(Math.pow(fieldSizeList, 2)).fill().map(() =>({
                id: uid(3),
                isSelected: false,
                isCurrentUserSelected: false,
                isComputerSelected: false,
            }))

            const listItem = propertiesList.map(el=>{
                return <li key={uid(3)} className={`${s.item} ${classes}`} ></li>
            })

            console.log(listItem);
            return(
                <div className={s.fieldList}>
                     <ul className={s.list}>
                         {listItem}
                     </ul>
                </div>
            );
        }

        return(
            <div className={s.fieldList}>
               <h1>Select Mode</h1>
            </div>
        );
    }
}

export default FieldList;
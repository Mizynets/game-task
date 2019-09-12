import React from 'react';
import s from './index.module.css';
import FieldListItem from '../FieldListItem';
import uid from 'uid';

const FieldList = ({fieldSize}) => {
    const fieldSizeList = +fieldSize;
    if(!!fieldSizeList){
        const listItem = Array(Math.pow(fieldSizeList, 2)).fill(1).map( _ => {
            return <li key={uid()} className={`${s.item} ${s.item_basis_5}`}> <FieldListItem/> </li>
        })
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
            <ul className={s.list}>
                <li className={`${s.item} ${s.initialItem}`}> <FieldListItem/> </li>
                <li className={`${s.item} ${s.initialItem}`}> <FieldListItem/> </li>
                <li className={`${s.item} ${s.initialItem}`}> <FieldListItem/> </li>
                <li className={`${s.item} ${s.initialItem}`}> <FieldListItem/> </li>
                <li className={`${s.item} ${s.initialItem}`}> <FieldListItem/> </li>
                <li className={`${s.item} ${s.initialItem}`}> <FieldListItem/> </li>
                <li className={`${s.item} ${s.initialItem}`}> <FieldListItem/> </li>
                <li className={`${s.item} ${s.initialItem}`}> <FieldListItem/> </li>
                <li className={`${s.item} ${s.initialItem}`}> <FieldListItem/> </li>
                <li className={`${s.item} ${s.initialItem}`}> <FieldListItem/> </li>
                <li className={`${s.item} ${s.initialItem}`}> <FieldListItem/> </li>
                <li className={`${s.item} ${s.initialItem}`}> <FieldListItem/> </li>
                <li className={`${s.item} ${s.initialItem}`}> <FieldListItem/> </li>
                <li className={`${s.item} ${s.initialItem}`}> <FieldListItem/> </li>
                <li className={`${s.item} ${s.initialItem}`}> <FieldListItem/> </li>
                <li className={`${s.item} ${s.initialItem}`}> <FieldListItem/> </li>
                <li className={`${s.item} ${s.initialItem}`}> <FieldListItem/> </li>
                <li className={`${s.item} ${s.initialItem}`}> <FieldListItem/> </li>
                <li className={`${s.item} ${s.initialItem}`}> <FieldListItem/> </li>
                <li className={`${s.item} ${s.initialItem}`}> <FieldListItem/> </li>
                <li className={`${s.item} ${s.initialItem}`}> <FieldListItem/> </li>
                <li className={`${s.item} ${s.initialItem}`}> <FieldListItem/> </li>
                <li className={`${s.item} ${s.initialItem}`}> <FieldListItem/> </li>
                <li className={`${s.item} ${s.initialItem}`}> <FieldListItem/> </li>
                <li className={`${s.item} ${s.initialItem}`}> <FieldListItem/> </li>

            </ul>
        </div>
    );
}

export default FieldList;
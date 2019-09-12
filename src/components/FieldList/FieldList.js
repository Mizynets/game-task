import React from 'react';
import s from './index.module.css';
import FieldListItem from '../FieldListItem';

const FieldList = (props) => {
    return(
        <div className={s.fieldList}>
            <ul className={s.list}>
                <li className={s.item}> <FieldListItem/> </li>
                <li className={s.item}> <FieldListItem/> </li>
                <li className={s.item}> <FieldListItem/> </li>
                <li className={s.item}> <FieldListItem/> </li>
                <li className={s.item}> <FieldListItem/> </li>
                <li className={s.item}> <FieldListItem/> </li>
                <li className={s.item}> <FieldListItem/> </li>
                <li className={s.item}> <FieldListItem/> </li>
                <li className={s.item}> <FieldListItem/> </li>
                <li className={s.item}> <FieldListItem/> </li>
                <li className={s.item}> <FieldListItem/> </li>
                <li className={s.item}> <FieldListItem/> </li>
                <li className={s.item}> <FieldListItem/> </li>
                <li className={s.item}> <FieldListItem/> </li>
                <li className={s.item}> <FieldListItem/> </li>
                <li className={s.item}> <FieldListItem/> </li>
                <li className={s.item}> <FieldListItem/> </li>
                <li className={s.item}> <FieldListItem/> </li>
                <li className={s.item}> <FieldListItem/> </li>
                <li className={s.item}> <FieldListItem/> </li>
                <li className={s.item}> <FieldListItem/> </li>
                <li className={s.item}> <FieldListItem/> </li>
                <li className={s.item}> <FieldListItem/> </li>
                <li className={s.item}> <FieldListItem/> </li>
                <li className={s.item}> <FieldListItem/> </li>
            </ul>
        </div>
    );
}

export default FieldList;
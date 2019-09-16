import React from 'react';
import s from './index.module.css';

const LeaderListItem = ({name, date}) => {
    return(
        <div className={s.leaderListItem}>
            <span className={s.itemText}>{name}</span>
            <span className={s.itemText}>{date}</span>
        </div>
    );
}

export default LeaderListItem;
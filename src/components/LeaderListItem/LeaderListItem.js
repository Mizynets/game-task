import React from 'react';
import s from './index.module.css';

const LeaderListItem = (props) => {
    return(
        <div className={s.leaderListItem}>
            <span className={s.itemText}>User Name</span>
            <span className={s.itemText}>Date and Time</span>
        </div>
    );
}

export default LeaderListItem;
import React from 'react';
import s from './index.module.css';

const LeaderListItem = (props) => {
    return(
        <div className={s.leaderListItem}>
            <p className={s.itemText}>user name</p>
        </div>
    );
}

export default LeaderListItem;
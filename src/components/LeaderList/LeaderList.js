import React from 'react';
import s from './index.module.css';
import LeaderListItem from '../LeaderListItem';

const LeaderList = (props) => {
    return(
        <div className={s.leaderList}>
            <ul className={s.list}>
                <li className={s.item}><LeaderListItem /></li>
                <li className={s.item}><LeaderListItem /></li>
                <li className={s.item}><LeaderListItem /></li>
            </ul>
        </div>
    )
}

export default LeaderList;
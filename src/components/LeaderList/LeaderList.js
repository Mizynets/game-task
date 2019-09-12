import React from 'react';
import s from './index.module.css';
import LeaderListItem from '../LeaderListItem';

const LeaderList = (props) => {
    return(
        <div className={s.leaderList}>
            <h2 className={s.title} >Leader Board</h2>
            <ul className={s.list}>
                <li className={s.item}><LeaderListItem /></li>
                <li className={s.item}><LeaderListItem /></li>
                <li className={s.item}><LeaderListItem /></li>
            </ul>
        </div>
    )
}

export default LeaderList;
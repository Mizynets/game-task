import React from 'react';
import s from './index.module.css';
import LeaderListItem from '../LeaderListItem';
import uid from "uid";

const LeaderList = ({list}) => {

    const leaderList = list.length
    ? list.map(el => {
        const { name, date } = el
        return <li key={uid()} className={s.item}><LeaderListItem name={name} date={date}/></li>
    }) 
    : []
  
    return(
        <div className={s.leaderList}>
            <h2 className={s.title} >Leader Board</h2>
            <ul className={s.list}>
                 {leaderList}
            </ul>
        </div>
    )
}

export default LeaderList;
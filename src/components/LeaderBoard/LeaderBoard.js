import React from 'react';
import s from './index.module.css';
import LeaderList from '../LeaderList';

const LeaderBoard = ({list}) => {
    return(
        <div className={s.LeaderBoard}>
            <LeaderList list={list} />
        </div>
    );
}

export default LeaderBoard;
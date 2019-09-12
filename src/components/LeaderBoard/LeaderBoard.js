import React from 'react';
import s from './index.module.css';
import LeaderList from '../LeaderList';

const LeaderBoard = (props) => {
    return(
        <div className={s.LeaderBoard}>
            <LeaderList />
        </div>
    );
}

export default LeaderBoard;
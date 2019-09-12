import React, { Component } from 'react';
import s from './index.module.css';
import GameInterface from '../../components/GameInterface/GameInterface';
import LeaderBoard from '../../components/LeaderBoard';

class GamePage extends Component{
    render(){
        return(
            <div className={s.gamePage}>
                <div className={s.gameInterface}>
                    <GameInterface />
                </div>
                <div className={s.leaderBoard}>
                    <LeaderBoard />
                </div>
            </div>
        );
    }
}

export default GamePage;
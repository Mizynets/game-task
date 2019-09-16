import React, { Component } from 'react';
import s from './index.module.css';
import LeaderListItem from '../LeaderListItem';
import uid from "uid";

class LeaderList extends Component  {

    state = {
        leader: [],
    }
render(){
 
        //  const leaderList = this.state.leader.map(el => {
        //     const { name, date } = el
        //     return <li key={uid()}><LeaderListItem name={name} date={date}/></li>
        // })

    const { list } = this.props
    const leaderList = list.length
    ? list.map(el => {
        const { name, date } = el
        return <li key={uid()}><LeaderListItem name={name} date={date}/></li>
    }) 
    : []
    console.log(leaderList);

    return(
        <div className={s.leaderList}>
            <h2 className={s.title} >Leader Board</h2>
            <ul className={s.list}>
                 {leaderList}
                 {/* <li ><LeaderListItem name={"Sanya"} date={"12.08.99"}/></li> */}
            </ul>
        </div>
    )
}
}
export default LeaderList;
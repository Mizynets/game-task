import React, { Component } from "react";
import s from "./index.module.css";
import GameInterface from "../../components/GameInterface/GameInterface";
import LeaderBoard from "../../components/LeaderBoard";
import axios from "axios";

class GamePage extends Component {
  state = {
    gameMode: null,
    loading: true,
    inputName: "",
    selectValue: "",
  };

  componentDidMount = () => {
    axios
      .get("http://starnavi-frontend-test-task.herokuapp.com/game-settings")
      .then(response => {
        const data = response.data;
        this.setState({
          gameMode: data,
          loading: false
        });
      })
      .catch(err => console.log(err));
  };

  handleChangeInputName = e => (
    this.setState({
      inputName: e.target.value,
    })
  ); 

  handleChangeSelect = e => (
    this.setState({
      selectValue: e.target.value,
    })
  );

  onHandlePlay = e => {

  }



  render() {
    const { gameMode, loading, inputName, selectValue } = this.state;
console.log(this.state);
    if (loading) {
      return <div>loading ...</div>;
    }

    return (
      <div className={s.gamePagePosition}>
        <div className={s.gamePage}>
          <div className={s.gameInterface}>
            <GameInterface
              inputName={inputName}
              selectValue={selectValue}
              gameMode={gameMode}
              handleChangeSelect={this.handleChangeSelect}
              handleChangeInputName={this.handleChangeInputName}
              onHandlePlay={this.onHandlePlay}
              fieldSize={selectValue}
            />
          </div>
          <div className={s.leaderBoard}>
            <LeaderBoard />
          </div>
        </div>
      </div>
    );
  }
}

export default GamePage;

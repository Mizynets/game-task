import React, { Component } from "react";
import s from "./index.module.css";
import GameInterface from "../../components/GameInterface/GameInterface";
import LeaderBoard from "../../components/LeaderBoard";
import { connect } from "react-redux";
import { thunkCreaterGetModes } from "../../reduxStore/actionCreater"

class GamePage extends Component {
  state = {
    inputName: "",
    selectValue: "",
  };

  

  componentDidMount = () => {
    this.props.thunkCreaterGetModes();
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

  render() {
    const { inputName, selectValue } = this.state;
    const { loading, gameMode } = this.props;
console.log(gameMode);
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

const mapStateToProps = ({loading, gameMode}) => {
  return {
    loading,
    gameMode,
  }
};

const mapDispatchToProps = {
  thunkCreaterGetModes,
}


export default connect(mapStateToProps, mapDispatchToProps)(GamePage);

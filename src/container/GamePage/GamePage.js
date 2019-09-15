import React, { Component } from "react";
import s from "./index.module.css";
import GameInterface from "../../components/GameInterface/GameInterface";
import LeaderBoard from "../../components/LeaderBoard";
import { connect } from "react-redux";
import {
  thunkCreaterGetModes,
  thunkCreaterGetWinner,
} from "../../reduxStore/actionCreater";
import uid from "uid";

class GamePage extends Component {
  state = {
    inputName: "",
    selectValue: "",
    startGame: false,
    gameOver: false,
    randomArr: null,
    propertiesItemArr: [],
    resetGame: false,
  };

  createItemPropertiesArr = () => {
    const { selectValue } = this.state;

    const fieldSizeList = +selectValue;

    const arrProperties = fieldSizeList
      ? Array(Math.pow(fieldSizeList, 2))
          .fill()
          .map(() => ({
            id: uid(),
            isSelected: false,
            isCurrentUserSelected: false,
            isComputerSelected: false
          }))
      : [];

    this.setState({
      propertiesItemArr: arrProperties
    });
  };

  componentDidMount = () => {
    this.props.thunkCreaterGetModes();
    this.props.thunkCreaterGetWinner();
    this.createItemPropertiesArr();
  };

  componentDidUpdate = (_, prevState) => {
    if (prevState.selectValue !== this.state.selectValue) {
      this.createItemPropertiesArr();
    }
    else if (prevState.gameOver !== this.state.gameOver){
      this.setState({
        resetGame: true,
      })
    }
  };

  handleChangeInputName = e =>
    this.setState({
      inputName: e.target.value
    });

  handleChangeSelect = e =>
    this.setState({
      selectValue: e.target.value
    });

  onHandlePlay = () => {
  const { resetGame } = this.state;
  if(resetGame){
    this.setState({
      inputName: "",
      selectValue: "",
      startGame: true,
      gameOver: false,
      randomArr: null,
      propertiesItemArr: [],
      resetGame: false,
    })
  
    console.log(this.state);
  }
    this.setState({
      startGame: true
    });
  };

  isCurrentUserSelectedChecker = item => item.isCurrentUserSelected;
  isComputerSelectedChecker = item => item.isComputerSelected;
  isSelectedChecker = item => item.isSelected;

  getRandomArr = arrLength => Math.floor(Math.random() * arrLength);

  // const array = Array(arrLength).fill().map((_,i) => i);
  // const randomArray = array.sort(() => Math.random() - 0.5);
  // this.setState({
  //   randomArr: randomArray,
  // })

  i = 0;
  timer;
  timerStartSelected;

  selectedCell = () => {
    const { propertiesItemArr, randomArr, selectValue, gameOver } = this.state;

    const winUser = propertiesItemArr.filter(el => el.isCurrentUserSelected);
    const winComputer = propertiesItemArr.filter(el => el.isComputerSelected);

    if(winUser.length > Math.floor(propertiesItemArr.length / 2) || winComputer.length > Math.floor(propertiesItemArr.length / 2)){
      this.setState({
        gameOver: true,
      })
    }

    if(gameOver){
      console.log("game over")
      return ;
    }

    const { gameMode } = this.props;
    const modeValue = +selectValue;

    const delay =
      modeValue === 5
        ? gameMode.easyMode.delay
        : modeValue === 10
        ? gameMode.normalMode.delay
        : modeValue === 15
        ? gameMode.hardMode.delay
        : null;

    const cloneArr = [...propertiesItemArr];
    const ind = this.i++;
    cloneArr[ind].isSelected = true;
    this.setState({
      propertiesItemArr: cloneArr
    });

    this.timer = setTimeout(this.selectedComputer, 100);
  };

  selectedUser = e => {
    clearTimeout(this.timer);
    const selectedItemID = e.currentTarget.dataset.id;
    const { propertiesItemArr, selectValue, gameOver } = this.state;


    const winUser = propertiesItemArr.filter(el => el.isCurrentUserSelected);
    const winComputer = propertiesItemArr.filter(el => el.isComputerSelected);

    if(winUser.length > Math.floor(propertiesItemArr.length / 2) || winComputer.length > Math.floor(propertiesItemArr.length / 2)){
      this.setState({
        gameOver: true,
      })
    }

    if(gameOver){
      console.log("game over")
      return ;
    }


    const { gameMode } = this.props;
    const modeValue = +selectValue;

    const delay =
      modeValue === 5
        ? gameMode.easyMode.delay
        : modeValue === 10
        ? gameMode.normalMode.delay
        : modeValue === 15
        ? gameMode.hardMode.delay
        : null;

    const cloneArr = [...propertiesItemArr];
    cloneArr[selectedItemID].isCurrentUserSelected = true;
    this.setState({
      propertiesItemArr: cloneArr
    });
    setTimeout(this.selectedCell, 100);
  };

  selectedComputer = () => {
    const { propertiesItemArr, selectValue, gameOver } = this.state;


    const winUser = propertiesItemArr.filter(el => el.isCurrentUserSelected);
    const winComputer = propertiesItemArr.filter(el => el.isComputerSelected);

    if(winUser.length > Math.floor(propertiesItemArr.length / 2) || winComputer.length > Math.floor(propertiesItemArr.length / 2)){
      this.setState({
        gameOver: true,
      })
    }

    if(gameOver){
      console.log("game over")
      return ;
    }

    const { gameMode } = this.props;
    const modeValue = +selectValue;

    const delay =
      modeValue === 5
        ? gameMode.easyMode.delay
        : modeValue === 10
        ? gameMode.normalMode.delay
        : modeValue === 15
        ? gameMode.hardMode.delay
        : null;
    
    const cloneArr = [...propertiesItemArr];
    const selectedIndex = cloneArr.findIndex(
      e => e.isSelected && !e.isCurrentUserSelected && !e.isComputerSelected
    );
    cloneArr[selectedIndex].isComputerSelected = true;
    this.setState({
      propertiesItemArr: cloneArr
    });
    setTimeout(this.selectedCell, 100);
  };

  render() {
    const { inputName, selectValue, startGame, propertiesItemArr, gameOver } = this.state;
    const { loading, gameMode,gameWinner } = this.props;
 
    if (loading) {
      return <div>loading ...</div>;
    }

    const winUser = propertiesItemArr.filter(el => el.isCurrentUserSelected);
    const winComputer = propertiesItemArr.filter(el => el.isComputerSelected);

    const winnerMassage =
      winUser.length > Math.floor(propertiesItemArr.length / 2)
        ? `${inputName} Win`
        : winComputer.length > Math.floor(propertiesItemArr.length / 2)
        ? `Computer Win`
        : `Massage`;

    const buttonValue = gameOver ? "PLAY AGAIN" : "PLAY";

    return (
      <div className={s.gamePagePosition}>
        <div className={s.gamePage}>
          <div className={s.gameInterface}>
            <GameInterface
              inputName={inputName}
              propertiesList={this.state.propertiesItemArr}
              selectValue={selectValue}
              gameMode={gameMode}
              handleChangeSelect={this.handleChangeSelect}
              handleChangeInputName={this.handleChangeInputName}
              onHandlePlay={this.onHandlePlay}
              startGame={startGame}
              isUserSelected={this.isCurrentUserSelectedChecker}
              isSelected={this.isSelectedChecker}
              isComputerSelected={this.isComputerSelectedChecker}
              selectedUser={this.selectedUser}
              startGameSelect={this.selectedCell}
              timerStart={this.timerStart}
              winnerMassage={winnerMassage}
              buttonValue={buttonValue}
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

const mapStateToProps = ({ loading, gameMode, gameWinner }) => {
  return {
    loading,
    gameMode,
    gameWinner,
  };
};

const mapDispatchToProps = {
  thunkCreaterGetModes,
  thunkCreaterGetWinner,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GamePage);

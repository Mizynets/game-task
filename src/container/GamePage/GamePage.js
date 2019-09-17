import React, { Component } from "react";
import s from "./index.module.css";
import GameInterface from "../../components/GameInterface/GameInterface";
import LeaderBoard from "../../components/LeaderBoard";
import { connect } from "react-redux";
import { thunkCreaterGetModes, thunkCreaterPostWinner } from "../../reduxStore/actionCreater";
import uid from "uid";
import Spinner from "../../components/UI/Spinner";


class GamePage extends Component {
  state = {
    inputName: "",
    selectValue: "",
    winner: "",
    startGame: false,
    gameOver: false,
    randomArr: null,
    propertiesItemArr: [],
    resetGame: false,
    leader: [],
  };
  
  i = 0;
  timer;
  timerStartSelected;

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
    const { thunkCreaterGetModes } = this.props;
    thunkCreaterGetModes();
    this.createItemPropertiesArr();
  };

  componentDidUpdate = (_, prevState) => {
    if (prevState.selectValue !== this.state.selectValue) {
      this.createItemPropertiesArr();
    } else if (prevState.gameOver !== this.state.gameOver) {
      this.setState({
        resetGame: true
      });
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
    const { resetGame, gameOver, selectValue } = this.state;
    if (resetGame) {
      this.i = 0;
      this.setState(
        {
          inputName: "",
          selectValue: "",
          gameOver: false,
          randomArr: null,
          propertiesItemArr: [],
          resetGame: false,
          startGame: false,
        })
      
    }
    if (!gameOver) {
    this.setState({startGame: true})    

        const delay = this.getDelay(selectValue);
        const len = Math.pow(+selectValue, 2);
        this.getRandomArr(len);
        setTimeout(this.selectedCell, delay);
    }
  };

  isCurrentUserSelectedChecker = item => item.isCurrentUserSelected;
  isComputerSelectedChecker = item => item.isComputerSelected;
  isSelectedChecker = item => item.isSelected;

  createLeaderList = () => {
    const { winner } = this.state;
    const obj = {
        name: winner,
        date: JSON.stringify(new Date().toLocaleString()),
    }
    const leaderTemp = [obj];

    this.setState((prevProps) => {
      return{
        leader: [...leaderTemp, ...prevProps.leader],
      }
    })
}

  getDelay = (selectValue) => {
    const { gameMode } = this.props;
    const modeValue = +selectValue;

    return  modeValue === 5
        ? gameMode.easyMode.delay
        : modeValue === 10
        ? gameMode.normalMode.delay
        : modeValue === 15
        ? gameMode.hardMode.delay
        : null;
  }

  getRandomArr = arrLength => {
    const { randomArr } = this.state;
    const array = Array(arrLength)
      .fill()
      .map((_, i) => i);
    if (!randomArr) {
      this.setState({
        randomArr: array.sort(() => Math.random() - 0.5),
      });
    }
  };

  stopGame = () => {
    const { propertiesItemArr, inputName } = this.state;

    const winUser = propertiesItemArr.filter(el => el.isCurrentUserSelected);
    const winComputer = propertiesItemArr.filter(el => el.isComputerSelected);
    
    let winner = null;
    let gameOver = false;
    
    if (winUser.length > Math.floor(propertiesItemArr.length / 2)) {
      winner = inputName;
      gameOver = true;
    }
    else if (winComputer.length > Math.floor(propertiesItemArr.length / 2)){
      winner = "computer";
      gameOver = true
    }
    
   gameOver && this.setState({
        gameOver: gameOver,
        winner: winner,
        startGame: false,
      });
  };

  selectedCell = () => {
    const { propertiesItemArr, randomArr, selectValue, gameOver } = this.state;
    this.stopGame();
    if (!gameOver) {
      const delay = this.getDelay(selectValue);
      const cloneArr = [...propertiesItemArr];
      const ind = this.i++;
      cloneArr[randomArr[ind]].isSelected = true;
      this.setState({
        propertiesItemArr: cloneArr
      });
      this.timer = setTimeout(this.selectedComputer, delay);
    }
  };

  selectedUser = e => {
    const { propertiesItemArr, selectValue, gameOver } = this.state;
    this.stopGame();
    if (!gameOver) {
    const delay = this.getDelay(selectValue); 
    const selectedItemID = e.currentTarget.dataset.id;
    const cloneArr = [...propertiesItemArr];

    const selectedIndex = cloneArr.findIndex(
      e => e.isSelected && !e.isCurrentUserSelected && !e.isComputerSelected
    );

    if(selectedIndex === +selectedItemID){
    clearTimeout(this.timer);
      cloneArr[selectedItemID].isCurrentUserSelected = true;
      this.setState({
        propertiesItemArr: cloneArr
      });
      setTimeout(this.selectedCell, delay);
    } 
    }  
  };

  selectedComputer = () => {
    const { propertiesItemArr, selectValue, gameOver, inputName, winner } = this.state;
    const { thunkCreaterPostWinner } = this.props;
    this.stopGame();
    
    if (gameOver) {
      this.createLeaderList();
      winner === inputName 
      ? thunkCreaterPostWinner(JSON.stringify({winner: inputName, data: new Date()}))    
      : thunkCreaterPostWinner(JSON.stringify({winner: "computer", data: new Date()}));
    }
    const delay = this.getDelay(selectValue);
    const cloneArr = [...propertiesItemArr];
    const selectedIndex = cloneArr.findIndex(
      e => e.isSelected && !e.isCurrentUserSelected && !e.isComputerSelected
    );
    cloneArr[selectedIndex].isComputerSelected = true;
    this.setState({
      propertiesItemArr: cloneArr
    });
    setTimeout(this.selectedCell, delay);
      
    
  };

  render() {
    const {
      inputName,
      selectValue,
      startGame,
      propertiesItemArr,
      gameOver,
      leader,
    } = this.state;
    const { loading, gameMode } = this.props;

    if (loading) {
      return <div className={s.spinner}>
        <Spinner />
      </div>
    }

    const winUser = propertiesItemArr.filter(el => el.isCurrentUserSelected);
    const winComputer = propertiesItemArr.filter(el => el.isComputerSelected);

    const winnerMassage =
      winUser.length > Math.floor(propertiesItemArr.length / 2)
        ? `${inputName} Win`
        : winComputer.length > Math.floor(propertiesItemArr.length / 2)
        ? `Computer Win`
        : (propertiesItemArr.length === 0 || inputName.length === 0)
        ? `Inputs should be full`
        : `Game`

    const buttonValue = gameOver ? "PLAY AGAIN" : "PLAY";

    return (
      <div className={s.gamePagePosition}>
        <div className={s.gamePage}>
          <div className={s.gameInterface}>
            <GameInterface
              inputName={inputName}
              propertiesList={propertiesItemArr}
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
              winnerMassage={winnerMassage}
              buttonValue={buttonValue}
            />
          </div>
          <div className={s.leaderBoard}>
            <LeaderBoard
              list={leader}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ loading, gameMode }) => {
  return {
    loading,
    gameMode
  };
};

const mapDispatchToProps = {
  thunkCreaterGetModes,
  thunkCreaterPostWinner
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GamePage);

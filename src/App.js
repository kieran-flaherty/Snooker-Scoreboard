import React, { Component, createContext } from "react";
import "./App.css";
import ButtonPanel from "./components/buttonPanel";
import Players from "./components/players";
import Helpers from "./helpers";
import InfoPanel from "./components/infoPanel";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: {
        name: "Ronnie O'Sullivan",
        frames: 1,
        score: 54,
        break: 0,
      },
      player2: {
        name: "Judd Trump",
        frames: 0,
        score: 61,
        break: null,
      },
      table: {
        colors: {
          red: 0,
          yellow: 0,
          green: 0,
          brown: 0,
          blue: 0,
          pink: 0,
          black: 1,
        },
        blackRespotted: null,
        on: "black",
      },
      playerAtTable: "player1",
      winner: null,
      inPlay: true,
    };
  }

  handlePot = (color) => {
    let ballScore = Helpers.ballValues[color];
    let playerScore = this.state[this.state.playerAtTable].score + ballScore;
    let playerBreak = this.state[this.state.playerAtTable].break + ballScore;
    let newState = { ...this.state };
    newState[this.state.playerAtTable].score = playerScore;
    newState[this.state.playerAtTable].break = playerBreak;
    newState.table = Helpers.getNewTableStateAfterPot(color, newState.table);
    if (Helpers.isTableCleared(newState.table)) {
      let winner = Helpers.getWinner(newState);
      if (winner === null) {
        newState.table.blackRespotted = true;
        newState.table.on = "black";
        newState.player1.break = 0;
        newState.player2.break = 0;
        newState.playerAtTable = Helpers.getRandomPlayer();
      } else {
        newState.inPlay = false;
        newState.winner = winner;
      }
    }
    this.setState(newState);
    if (!newState.inPlay) {
      this.handleEndGame(newState);
    }
  };

  handleEndTurn = () => {
    let newState = { ...this.state };
    if (this.state.table.on !== "red") {
      if (this.state.table.on === "color") {
        if (this.state.table.colors.red > 0) {
          newState.table.on = "red";
        } else {
          newState.table.on = "yellow";
        }
      }
    }
    newState[this.state.playerAtTable].break = null;
    newState.playerAtTable = Helpers.getOtherPlayer(this.state.playerAtTable);
    newState[newState.playerAtTable].break = 0;
    this.setState(newState);
  };

  handleFoul = (color) => {
    let foulValue = Helpers.ballValues[color];
    let otherPlayer = Helpers.getOtherPlayer(this.state.playerAtTable);
    let otherPlayerScore = this.state[otherPlayer].score + foulValue;
    let newState = { ...this.state };
    newState[otherPlayer].score = otherPlayerScore;
    this.setState(newState);
    this.handleEndTurn();
  };

  handleConcede = (playerConceding) => {};

  handleEndGame = (state) => {
    let newState = { ...state };
    state[newState.winner].frames += 1;
    this.setState(newState);
  };

  handleNewGame = () => {
    //TODO: Reset winner, inplay, table, blackRespotted, breaks
  };

  render() {
    return (
      <div className="App">
        <Players
          player1={this.state.player1}
          player2={this.state.player2}
          playerAtTable={this.state.playerAtTable}
        />
        <InfoPanel {...this.state} />
        <ButtonPanel
          table={this.state.table}
          inPlay={this.state.inPlay}
          onPot={this.handlePot}
          onFoul={this.handleFoul}
          onEndTurn={this.handleEndTurn}
        />
      </div>
    );
  }
}

export default App;

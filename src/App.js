import React, { Component } from "react";
import "./App.css";
import Player from "./components/player";
import InPlay from "./components/inplay";

const ballValues = {
  red: 1,
  yellow: 2,
  green: 3,
  brown: 4,
  blue: 5,
  pink: 6,
  black: 7,
};

class App extends Component {
  // Test state
  state = {
    player1: {
      name: "Ronnie O'Sullivan",
      frames: 0,
      score: 15,
      break: 15,
    },
    player2: {
      name: "Judd Trump",
      frames: 0,
      score: 0,
      break: null,
    },
    table: {
      red: 13,
      yellow: 1,
      green: 1,
      brown: 1,
      blue: 1,
      pink: 1,
      black: 1,
    },
    playerAtTable: "player1",
  };

  handlePot = (color) => {
    let ballScore = ballValues[color];
    let playerScore = this.state[this.state.playerAtTable].score + ballScore;
    let playerBreak = this.state[this.state.playerAtTable].break + ballScore;
    let newState = { ...this.state };
    newState[this.state.playerAtTable].score = playerScore;
    newState[this.state.playerAtTable].break = playerBreak;
    newState.table[color] -= 1;
    this.setState(newState);
  };

  render() {
    return (
      <div className="App">
        <Player {...this.state.player1} />
        <Player {...this.state.player2} />
        <InPlay table={this.state.table} onPot={this.handlePot} />
      </div>
    );
  }
}

export default App;

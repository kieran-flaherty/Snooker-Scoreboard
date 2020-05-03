import React, { Component } from "react";
import "./App.css";
import ButtonPanel from "./components/buttonPanel";
import Players from "./components/players";

const ballValues = {
  red: 1,
  yellow: 2,
  green: 3,
  brown: 4,
  blue: 5,
  pink: 6,
  black: 7,
};

const colorOrder = ["yellow", "green", "brown", "blue", "pink", "black"];

const getOtherPlayer = (player) => {
  if (player === "player1") {
    return "player2";
  } else if (player === "player2") {
    return "player1";
  } else {
    throw `Not a player: ${player}`;
  }
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
      colors: {
        red: 13,
        yellow: 1,
        green: 1,
        brown: 1,
        blue: 1,
        pink: 1,
        black: 1,
      },
      on: "red",
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
    newState.table = this.handleRespot(color, newState.table);
    this.setState(newState);
  };

  handleRespot = (color, table) => {
    if (table.on === "red") {
      table.colors[color] -= 1;
      table.on = "color";
    } else if (table.on === "color") {
      table.on = table.colors.red === 0 ? "yellow" : "red";
    } else {
      table.colors[color] -= 1;
      if (color !== "black") {
        let nextColor = colorOrder[colorOrder.indexOf(color) + 1];
        table.on = nextColor;
      } else {
        table.on = null;
      }
    }
    return table;
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
    newState.playerAtTable = getOtherPlayer(this.state.playerAtTable);
    newState[newState.playerAtTable].break = 0;
    this.setState(newState);
  };

  handleFoul = (color) => {
    let foulValue = ballValues[color];
    let otherPlayer = getOtherPlayer(this.state.playerAtTable);
    let otherPlayerScore = this.state[otherPlayer].score + foulValue;
    let newState = { ...this.state };
    newState[otherPlayer].score = otherPlayerScore;
    this.setState(newState);
    this.handleEndTurn();
  };

  render() {
    return (
      <div className="App">
        <Players
          player1={this.state.player1}
          player2={this.state.player2}
          playerAtTable={this.state.playerAtTable}
        />
        <ButtonPanel
          table={this.state.table}
          onPot={this.handlePot}
          onFoul={this.handleFoul}
          onEndTurn={this.handleEndTurn}
        />
      </div>
    );
  }
}

export default App;

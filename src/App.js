import React, { Component } from "react";
import "./App.css";
import ButtonPanel from "./components/buttonPanel";
import Players from "./components/players";
import Helpers from "./helpers";
import InfoPanel from "./components/infoPanel";

class App extends Component {
  // respotBlack = (state) => {
  //   state.table.blackRespotted = true;
  //   state.table.on = "black";
  //   state.player1.break = 0;
  //   state.player2.break = 0;
  //   state.playerAtTable = Helpers.getRandomPlayer();
  //   return state;
  // };

  // endFrame = (state, winner) => {
  //   state.inPlay = false;
  //   state.winner = winner;
  //   state[state.winner].frames += 1;
  //   state.table.blackRespotted = false;
  //   return state;
  // };

  // handleEndTurn = () => {
  //   let newState = { ...this.state };
  //   if (this.state.table.on !== "red") {
  //     if (this.state.table.on === "color") {
  //       if (this.state.table.colors.red > 0) {
  //         newState.table.on = "red";
  //       } else {
  //         newState.table.on = "yellow";
  //       }
  //     }
  //   }
  //   newState[this.state.playerAtTable].break = null;
  //   newState.playerAtTable = Helpers.getOtherPlayer(this.state.playerAtTable);
  //   newState[newState.playerAtTable].break = 0;
  //   this.setState(newState);
  // };

  // handleFoul = (color) => {
  //   let foulValue = Helpers.ballValues[color];
  //   let otherPlayer = Helpers.getOtherPlayer(this.state.playerAtTable);
  //   let otherPlayerScore = this.state[otherPlayer].score + foulValue;
  //   let newState = { ...this.state };
  //   newState[otherPlayer].score = otherPlayerScore;
  //   this.setState(newState);
  //   this.handleEndTurn();
  // };

  // handleNewFrame = () => {
  //   //TODO: Reset winner, inplay, table, breaks
  // };

  render() {
    return (
      <div className="App">
        <Players />
        {/* <InfoPanel {...this.state} /> */}
        <ButtonPanel></ButtonPanel>
      </div>
    );
  }
}

export default App;

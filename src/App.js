import React, { Component } from "react";
import "./App.css";
import ButtonPanel from "./components/buttonPanel";
import Players from "./components/players";
import Helpers from "./helpers";
import InfoPanel from "./components/infoPanel";

class App extends Component {
  // addPotScoreToBreak = (state, color) => {
  //   let currentPlayer = state.playerAtTable;
  //   let ballScore = Helpers.ballValues[color];
  //   state[currentPlayer].score = state[currentPlayer].score + ballScore;
  //   state[currentPlayer].break = state[currentPlayer].break + ballScore;
  //   return state;
  // };

  // getNewTableStateAfterPot = (color, table) => {
  //   if (table.on === "red") {
  //     table.colors[color] -= 1;
  //     table.on = "color";
  //   } else if (table.on === "color") {
  //     table.on = table.colors.red === 0 ? "yellow" : "red";
  //   } else {
  //     table.colors[color] -= 1;
  //     if (color !== "black") {
  //       let nextColor =
  //         Helpers.colorOrder[Helpers.colorOrder.indexOf(color) + 1];
  //       table.on = nextColor;
  //     } else {
  //       table.on = null;
  //     }
  //   }
  //   return table;
  // };

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

  // handlePot = (color) => {
  //   let newState = { ...this.state };
  //   newState = this.addPotScoreToBreak(newState, color);
  //   newState.table = this.getNewTableStateAfterPot(color, newState.table);
  //   if (Helpers.isTableCleared(newState.table)) {
  //     let winner = Helpers.getWinner(newState);
  //     if (winner === null) {
  //       newState = this.respotBlack(newState);
  //     } else {
  //       newState = this.endFrame(newState, winner);
  //     }
  //   }
  //   this.setState(newState);
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

  // handleConcede = (playerConceding) => {};

  // handleNewFrame = () => {
  //   //TODO: Reset winner, inplay, table, breaks
  // };

  render() {
    return (
      <div className="App">
        <Players
        // player1={this.state.player1}
        // player2={this.state.player2}
        // playerAtTable={this.state.playerAtTable}
        />
        {/* <InfoPanel {...this.state} />
        <ButtonPanel
          table={this.state.table}
          inPlay={this.state.inPlay}
          onPot={this.handlePot}
          onFoul={this.handleFoul}
          onEndTurn={this.handleEndTurn}
        /> */}
      </div>
    );
  }
}

export default App;

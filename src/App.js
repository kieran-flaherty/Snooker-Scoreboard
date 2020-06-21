import React, { Component } from "react";
import "./App.css";
import ButtonPanel from "./components/buttonPanel";
import Players from "./components/players";
import Helpers from "./helpers";
import InfoPanel from "./components/infoPanel";

class App extends Component {
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

import React, { Component } from "react";
import "./App.css";
import Player from "./components/player";
import InPlay from "./components/inplay";

class App extends Component {
  // Test state
  state = {
    player1: {
      name: "Ronnie O'Sullivan",
      frames: 0,
      score: 15,
    },
    player2: {
      name: "Judd Trump",
      frames: 0,
      score: 0,
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
  };

  render() {
    return (
      <div className="App">
        <Player {...this.state.player1} />
        <Player {...this.state.player2} />
        <InPlay {...this.state.table} />
      </div>
    );
  }
}

export default App;

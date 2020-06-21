import React, { Component } from "react";
import "./App.css";
import ButtonPanel from "./components/buttonPanel";
import Players from "./components/players";
import Helpers from "./helpers";
import InfoPanel from "./components/infoPanel";

class App extends Component {
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

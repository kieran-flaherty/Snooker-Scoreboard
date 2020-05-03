import React, { Component } from "react";
import Player from "./player";
import "./players.css";

class Players extends Component {
  render() {
    const player1AtTable =
      this.props.playerAtTable === "player1" ? true : false;
    const player2AtTable = !player1AtTable;
    return (
      <div className="d-flex justify-content-center">
        <Player {...this.props.player1} id="player1" atTable={player1AtTable} />
        <Player {...this.props.player2} id="player2" atTable={player2AtTable} />
      </div>
    );
  }
}

export default Players;

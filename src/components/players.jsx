import React, { Component } from "react";
import Player from "./player";
import "./players.css";
import { connect } from "react-redux";

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

let mapStateToProps = (state) => {
  return {
    player1: state.player1,
    player2: state.player2,
    playerAtTable: state.playerAtTable,
  };
};

export default connect(mapStateToProps)(Players);

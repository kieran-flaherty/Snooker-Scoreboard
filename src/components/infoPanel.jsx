import React, { Component } from "react";
import { connect } from "react-redux";

const InfoPanel = (props) => {
  let info = "";
  if (props.table.blackRespotted === true) {
    info += "Respotted Black";
  } else if (props.winner !== null) {
    info += `Frame winner: ${props[props.winner].name}`;
  }
  return (
    <div className="text-center p-4">
      <h4 className="m-0">{info ? info : "\u00A0"}</h4>
    </div>
  );
};

let mapStateToProps = (state) => ({
  player1: state.player1,
  player2: state.player2,
  table: state.table,
  winner: state.winner,
});

export default connect(mapStateToProps)(InfoPanel);

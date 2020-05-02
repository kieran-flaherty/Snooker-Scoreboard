import React from "react";
import Player from "./player";

const Players = (props) => {
  return (
    <div class="d-flex justify-content-center">
      <Player {...props.player1} id="player1" />
      <Player {...props.player2} id="player2" />
    </div>
  );
};

export default Players;

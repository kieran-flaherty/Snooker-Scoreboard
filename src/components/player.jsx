import React from "react";

const Player = (props) => {
  return (
    <div id={props.id} class="p-2 text-center">
      <h4>{props.name}</h4>
      <h4>{props.score}</h4>
    </div>
  );
};

export default Player;

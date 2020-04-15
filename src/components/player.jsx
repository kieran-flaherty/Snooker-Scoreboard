import React from "react";

const Player = (props) => {
  return (
    <React.Fragment>
      <h4>{props.name}</h4>
      <h4>{props.score}</h4>
    </React.Fragment>
  );
};

export default Player;

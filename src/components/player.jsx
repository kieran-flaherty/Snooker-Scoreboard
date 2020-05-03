import React from "react";

const Player = (props) => {
  const classText = `m-1 text-center w-50 ${
    props.atTable ? "border rounded current-player" : ""
  }`;
  return (
    <div id={props.id} className={classText}>
      <h4>{props.name}</h4>
      <h4>{props.score}</h4>
    </div>
  );
};

export default Player;

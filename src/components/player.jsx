import React from "react";

const Player = (props) => {
  const BreakText = (props) => {
    return props.atTable ? <h5>Break: {props.break}</h5> : <h5>-</h5>;
  };

  const classText = `m-1 text-center w-50 ${
    props.atTable ? "border rounded current-player" : ""
  }`;
  return (
    <div id={props.id} className={classText}>
      <h3>{props.name}</h3>
      <h3>{props.score}</h3>
      <BreakText {...props} />
    </div>
  );
};

export default Player;

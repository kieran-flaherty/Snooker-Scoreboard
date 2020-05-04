import React from "react";

const BreakText = (props) => {
  return props.atTable ? <h5>Break: {props.break}</h5> : <h5>-</h5>;
};

const Player = (props) => {
  let classText = "m-1 text-center w-50 ";
  if (props.atTable) {
    classText += "border rounded current-player";
  }
  return (
    <div id={props.id} className={classText}>
      <h3>{props.name}</h3>
      <h3>{props.score}</h3>
      <BreakText {...props} />
      <h4>({props.frames})</h4>
    </div>
  );
};

export default Player;

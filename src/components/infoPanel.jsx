import React, { Component } from "react";

const InfoPanel = (props) => {
  let info = "";
  if (props.table.blackRespotted === true) {
    info += "Respotted Black";
  }
  return (
    <div className="text-center p-4">
      <h4 className="m-0">{info ? info : "\u00A0"}</h4>
    </div>
  );
};

export default InfoPanel;
import React, { Component } from "react";
import "./inplay.css";

const InPlay = (props) => {
  return (
    <div>
      {/* Todo: render this dynamically */}
      <span className="badge badge-red">{props.red}</span>
      <span className="badge badge-yellow">{props.yellow}</span>
      <span className="badge badge-green">{props.green}</span>
      <span className="badge badge-brown">{props.brown}</span>
      <span className="badge badge-blue">{props.blue}</span>
      <span className="badge badge-pink">{props.pink}</span>
      <span className="badge badge-black">{props.black}</span>
    </div>
  );
};

export default InPlay;

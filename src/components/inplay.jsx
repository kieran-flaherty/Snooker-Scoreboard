import React, { Component } from "react";
import "./inplay.css";

class InPlay extends Component {
  getButtonForColor = (color) => {
    const colorClassName = "badge badge-" + color;
    return (
      <button
        className="btn btn-sm p-1"
        onClick={() => this.props.onPot(color)}
      >
        <span className={colorClassName}>{this.props.table[color]}</span>
      </button>
    );
  };

  render() {
    return (
      <div>
        {Object.keys(this.props.table).map((color) => {
          return this.getButtonForColor(color);
        })}
      </div>
    );
  }
}

export default InPlay;

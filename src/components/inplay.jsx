import React, { Component } from "react";
import "./inplay.css";

class InPlay extends Component {
  getButtonForColor = (color) => {
    const colorClassName = "badge badge-" + color;
    return (
      <button
        className="btn btn-sm p-1"
        onClick={() => this.props.onPot(color)}
        key={color}
      >
        <span className={colorClassName}>{color}</span>
      </button>
    );
  };

  render() {
    let availableBalls = [];
    switch (this.props.table.on) {
      case null:
        break;
      case "red":
        availableBalls = ["red"];
        break;
      case "color":
        availableBalls = Object.keys(this.props.table.colors).filter(
          (b) => b != "red"
        );
        break;
      default:
        availableBalls = [this.props.table.on];
    }
    return (
      <div>
        {availableBalls.map((color) => {
          return this.getButtonForColor(color);
        })}
      </div>
    );
  }
}

export default InPlay;

import React, { Component } from "react";
import "./buttonPanel.css";
import Helpers from "./../helpers";

const fouls = ["brown", "blue", "pink", "black"];

class ButtonPanel extends Component {
  getButtonForColor = (color, foul) => {
    const colorClassName = "badge badge-" + color;
    return (
      <button
        className="btn btn-lg p-1"
        onClick={() => {
          if (foul) {
            this.props.onFoul(color);
          } else {
            this.props.onPot(color);
          }
        }}
        key={color}
      >
        <span className={colorClassName}>
          {foul
            ? `Foul(${Helpers.ballValues[color]})`
            : `Pot(${Helpers.ballValues[color]})`}
        </span>
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
          (b) => b !== "red"
        );
        break;
      default:
        availableBalls = [this.props.table.on];
    }
    return (
      <React.Fragment>
        <div className="text-center">
          {availableBalls.map((color) => {
            return this.getButtonForColor(color, false);
          })}
          <button className="btn btn-lg p-1" onClick={this.props.onEndTurn}>
            <span className="badge badge-light">No Score</span>
          </button>
        </div>
        <div className="text-center">
          {fouls.map((foul) => {
            return this.getButtonForColor(foul, true);
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default ButtonPanel;

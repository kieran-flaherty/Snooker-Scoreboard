import React, { Component } from "react";
import "./buttonPanel.css";
import Helpers from "./../helpers";
import { connect } from "react-redux";
import { pot, foul } from "../actions";

const fouls = ["brown", "blue", "pink", "black"];

const NewGameButton = () => {
  return (
    <button className="btn btn-lg p-1">
      <span className="badge badge-light">New Frame</span>
    </button>
  );
};

class ButtonPanel extends Component {
  noScoreButton = () => {
    return (
      <button className="btn btn-lg p-1" onClick={this.props.onEndTurn}>
        <span className="badge badge-light">No Score</span>
      </button>
    );
  };

  getAvailableBalls = () => {
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
    return availableBalls;
  };

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
    let availableBalls = this.getAvailableBalls();
    if (this.props.inPlay) {
      return (
        <React.Fragment>
          <div className="text-center">
            {availableBalls.map((color) => {
              return this.getButtonForColor(color, false);
            })}
          </div>
          <div className="text-center">{this.noScoreButton()}</div>
          <div className="text-center">
            {fouls.map((foul) => {
              return this.getButtonForColor(foul, true);
            })}
          </div>
        </React.Fragment>
      );
    } else {
      return <div className="text-center">{NewGameButton()}</div>;
    }
  }
}

let mapStateToProps = (state) => ({
  table: state.table,
  inPlay: state.inPlay,
});

// onPot={this.handlePot}
// onFoul={this.handleFoul}
// onEndTurn={this.handleEndTurn}
let mapDispatchToProps = (dispatch) => ({
  onPot: (color) => dispatch(pot(color)),
  onFoul: (color) => dispatch(foul(color)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonPanel);

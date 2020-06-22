import React, { Component } from "react";
import "./buttonPanel.css";
import Helpers from "./../helpers";
import { connect } from "react-redux";
import { pot, foul, noScore, newFrame } from "../actions";

const fouls = ["brown", "blue", "pink", "black"];

class ButtonPanel extends Component {
  NoScoreButton = () => {
    return (
      <div className="text-center">
        <button className="btn btn-lg p-1" onClick={this.props.onEndTurn}>
          <span className="badge badge-light">No Score</span>
        </button>
      </div>
    );
  };

  NewGameButton = () => {
    return (
      <div className="text-center">
        <button className="btn btn-lg p-1" onClick={this.props.onEndFrame}>
          <span className="badge badge-light">New Frame</span>
        </button>
      </div>
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
          {this.NoScoreButton()}
          <div className="text-center">
            {fouls.map((foul) => {
              return this.getButtonForColor(foul, true);
            })}
          </div>
        </React.Fragment>
      );
    } else {
      return this.NewGameButton();
    }
  }
}

let mapStateToProps = (state) => ({
  table: state.table,
  inPlay: state.inPlay,
});

let mapDispatchToProps = (dispatch) => ({
  onPot: (color) => dispatch(pot(color)),
  onFoul: (color) => dispatch(foul(color)),
  onEndTurn: () => dispatch(noScore()),
  onEndFrame: () => dispatch(newFrame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonPanel);

import { actionTypes } from "../actions";
import produce from "immer";
import Helpers from "../helpers";

const getNewTableStateAfterPot = (color, table) => {
  if (table.on === "red") {
    table.colors[color] -= 1;
    table.on = "color";
  } else if (table.on === "color") {
    table.on = table.colors.red === 0 ? "yellow" : "red";
  } else {
    table.colors[color] -= 1;
    if (color !== "black") {
      let nextColor = Helpers.colorOrder[Helpers.colorOrder.indexOf(color) + 1];
      table.on = nextColor;
    } else {
      table.on = null;
    }
  }
  return table;
};

// handlePot = (color) => {
//   let newState = { ...this.state };
//   newState = this.addPotScoreToBreak(newState, color);
//   newState.table = this.getNewTableStateAfterPot(color, newState.table);
//   if (Helpers.isTableCleared(newState.table)) {
//     let winner = Helpers.getWinner(newState);
//     if (winner === null) {
//       newState = this.respotBlack(newState);
//     } else {
//       newState = this.endFrame(newState, winner);
//     }
//   }
// };

const getStateAfterPot = (state, color) => {
  let currentPlayer = state.playerAtTable;
  let ballScore = Helpers.ballValues[color];
  // TODO: Add respot and frame ending logic here
  return produce(state, (draftState) => {
    draftState[currentPlayer].score += ballScore;
    draftState[currentPlayer].break += ballScore;
    draftState.table = getNewTableStateAfterPot(color, draftState.table);
  });
};

const rootReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.POT:
      return getStateAfterPot(state, action.payload.color);
    default:
      return state;
  }
};

export default rootReducer;

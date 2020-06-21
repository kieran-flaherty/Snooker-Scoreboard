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

const respotBlack = (state) => {
  state.table.blackRespotted = true;
  state.table.on = "black";
  state.player1.break = 0;
  state.player2.break = 0;
  state.playerAtTable = Helpers.getRandomPlayer();
  return state;
};

const endFrame = (state, winner) => {
  state.inPlay = false;
  state.winner = winner;
  state[winner].frames += 1;
  state.table.blackRespotted = false;
};

const getStateAfterPot = (state, color) => {
  let currentPlayer = state.playerAtTable;
  let ballScore = Helpers.ballValues[color];
  return produce(state, (draftState) => {
    draftState[currentPlayer].score += ballScore;
    draftState[currentPlayer].break += ballScore;
    draftState.table = getNewTableStateAfterPot(color, draftState.table);
    if (Helpers.isTableCleared(draftState.table)) {
      let winner = Helpers.getWinner(draftState);
      if (winner === null) {
        respotBlack(draftState);
      } else {
        endFrame(draftState, winner);
      }
    }
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

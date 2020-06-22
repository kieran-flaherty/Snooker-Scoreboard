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

const getStateAfterFoul = (state, color) => {
  let foulValue = Helpers.ballValues[color];
  let otherPlayer = Helpers.getOtherPlayer(state.playerAtTable);
  return produce(state, (draftState) => {
    draftState[otherPlayer].score += foulValue;
    if (draftState.table.on !== "red") {
      if (draftState.table.on === "color") {
        if (draftState.table.colors.red > 0) {
          draftState.table.on = "red";
        } else {
          draftState.table.on = "yellow";
        }
      }
    }
    draftState[draftState.playerAtTable].break = null;
    draftState.playerAtTable = Helpers.getOtherPlayer(draftState.playerAtTable);
    draftState[draftState.playerAtTable].break = 0;
  });
};

const getStateAfterNoScore = (state) => {
  return produce(state, (draftState) => {
    if (draftState.table.on !== "red") {
      if (draftState.table.on === "color") {
        if (draftState.table.colors.red > 0) {
          draftState.table.on = "red";
        } else {
          draftState.table.on = "yellow";
        }
      }
    }
    draftState[draftState.playerAtTable].break = null;
    draftState.playerAtTable = Helpers.getOtherPlayer(draftState.playerAtTable);
    draftState[draftState.playerAtTable].break = 0;
  });
};

const getStateAfterNewFrame = (state) => {
  return produce(state, (draftState) => {
    draftState.inPlay = true;
    // TODO: mechanism that stores player who broke off and replace here
    draftState.playerAtTable = Helpers.getRandomPlayer();
    draftState.player1.break = 0;
    draftState.player1.score = 0;
    draftState.player2.break = 0;
    draftState.player2.score = 0;
    draftState.winner = null;
    draftState.inPlay = true;
    draftState.table = Helpers.reRackedTable();
  });
};

const rootReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.POT:
      return getStateAfterPot(state, action.payload.color);
    case actionTypes.FOUL:
      return getStateAfterFoul(state, action.payload.color);
    case actionTypes.NO_SCORE:
      return getStateAfterNoScore(state);
    case actionTypes.NEW_FRAME:
      return getStateAfterNewFrame(state);
    default:
      return state;
  }
};

export default rootReducer;

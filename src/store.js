import { createStore } from "redux";
import rootReducer from "./reducers";

let initialState = {
  player1: {
    //TODO add feature for editing players names
    name: "Ronnie O'Sullivan",
    frames: 0,
    score: 0,
    break: 0,
  },
  player2: {
    name: "Judd Trump",
    frames: 0,
    score: 0,
    break: null,
  },
  table: {
    colors: {
      red: 15,
      yellow: 1,
      green: 1,
      brown: 1,
      blue: 1,
      pink: 1,
      black: 1,
    },
    blackRespotted: null,
    on: "red",
  },
  playerAtTable: "player1",
  winner: null,
  inPlay: true,
};

export const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

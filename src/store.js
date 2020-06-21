import { createStore } from "redux";

let testState = {
  player1: {
    name: "Ronnie O'Sullivan",
    frames: 1,
    score: 74,
    break: 0,
  },
  player2: {
    name: "Judd Trump",
    frames: 0,
    score: 3,
    break: null,
  },
  table: {
    colors: {
      red: 3,
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

export const store = createStore((state) => state, testState);

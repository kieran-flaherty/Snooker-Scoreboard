const Helpers = {
  getOtherPlayer: (player) => {
    if (player === "player1") {
      return "player2";
    } else if (player === "player2") {
      return "player1";
    } else {
      throw `Not a player: ${player}`;
    }
  },
  getWinner: (state) => {
    let player1Score = state.player1.score;
    let player2Score = state.player2.score;
    if (player1Score > player2Score) {
      return "player1";
    } else if (player2Score > player1Score) {
      return "player2";
    }
    return null;
  },
  getRandomPlayer: () => {
    return Math.random() < 0.5 ? "player1" : "player2";
  },
  isTableCleared: (table) => {
    let remaining = [];
    remaining = Object.keys(table.colors).filter((c) => {
      return table.colors[c] > 0;
    });
    if (remaining.length > 0) {
      return false;
    }
    return true;
  },
  //TODO make ballValues and colorOrder functions
  ballValues: {
    red: 1,
    yellow: 2,
    green: 3,
    brown: 4,
    blue: 5,
    pink: 6,
    black: 7,
  },
  colorOrder: ["yellow", "green", "brown", "blue", "pink", "black"],
  reRackedTable: () => {
    return {
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
    };
  },
};

export default Helpers;

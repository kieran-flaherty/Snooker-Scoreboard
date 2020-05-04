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
};

export default Helpers;

export const actionTypes = {
  POT: "POT",
  FOUL: "FOUL",
  NO_SCORE: "NO_SCORE",
  NEW_GAME: "NEW_GAME",
};

export const pot = (color) => {
  return {
    type: actionTypes.POT,
    payload: { color },
  };
};

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

export const foul = (color) => {
  return {
    type: actionTypes.FOUL,
    payload: { color },
  };
};

export const noScore = () => {
  return {
    type: actionTypes.NO_SCORE,
  };
};

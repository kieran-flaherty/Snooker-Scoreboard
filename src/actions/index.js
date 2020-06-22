export const actionTypes = {
  POT: "POT",
  FOUL: "FOUL",
  NO_SCORE: "NO_SCORE",
  NEW_FRAME: "NEW_FRAME",
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

export const newFrame = () => {
  return {
    type: actionTypes.NEW_FRAME,
  };
};

export const getNextRotation = (rotation) => {
  if (rotation === 345) {
    return 0;
  }
  return rotation + 15;
};

export const getPreviousRotation = (rotation) => {
  if (rotation === 0) {
    return 345;
  }
  return rotation - 15;
};
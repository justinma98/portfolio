let topZIndex = 1;
let numWindows = 0;

export const selectWindow = zIndex => {
  return zIndex === topZIndex - 1 ? zIndex : topZIndex++;
};

export const windowComplete = () => {
  numWindows++;
}

export const getNumWindows = () => {
  return numWindows;
}
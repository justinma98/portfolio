let topZIndex = 1;

export const selectWindow = zIndex => {
  return zIndex === topZIndex - 1 ? zIndex : topZIndex++;
};
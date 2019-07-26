let topZIndex = 1;

export const selectWindow = zIndex => {
  return zIndex === topZIndex ? zIndex : topZIndex++;
};
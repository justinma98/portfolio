let topZIndex = 1;

export const selectWindow = zIndex => {
  if (zIndex === topZIndex) return zIndex;
  topZIndex++;
  return topZIndex;
}
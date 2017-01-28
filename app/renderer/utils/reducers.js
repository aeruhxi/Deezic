export const propInState = (state, itemProp, prop) => {
  for (let item of state) {
    if (item[itemProp] === prop) return true;
  }
  return false;
};

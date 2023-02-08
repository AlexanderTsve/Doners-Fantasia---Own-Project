import { state } from "./state.js";
export const fillCart = (obj) => {
  if (!state.cart.some((arrObj) => arrObj.name === obj.name)) {
    state.cart.push(obj);
  } else {
    const item = state.cart.find((arrObj) => arrObj.name === obj.name);
    item.qty += obj.qty;
    item.price += obj.price;
  }
};

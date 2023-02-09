import { state } from "./state.js";
export const fillCart = (obj) => {
  let cart = localStorage.getItem("doner-cart");
  if (!cart) {
    localStorage.setItem("doner-cart", JSON.stringify([]));
  }
  cart = JSON.parse(localStorage.getItem("doner-cart"));
  if (cart.some((item) => item.name === obj.name)) {
    const item = cart.find((item) => item.name === obj.name);
    item.qty += obj.qty;
    item.price += obj.price;
  }
  if (!cart.some((item) => item.name === obj.name)) {
    cart.push(obj);
  }
  localStorage.setItem("doner-cart", JSON.stringify(cart));
};

import { PRODUCT_ITEM } from "../config.js";
export const removeProductFromCart = (name) => {
  let cart = localStorage.getItem("doner-cart");
  if (!cart || cart.length === 0) {
    return;
  }
  cart = JSON.parse(localStorage.getItem("doner-cart"));
  const itemIndex = cart.findIndex((item) => item.name === name);
  cart.splice(itemIndex, PRODUCT_ITEM);
  localStorage.setItem("doner-cart", JSON.stringify(cart));
};

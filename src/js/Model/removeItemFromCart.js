import { MIN_QTY_OF_ITEM, PRODUCT_ITEM } from "../config.js";
export const removeItemFromCart = (obj) => {
  let cart = localStorage.getItem("doner-cart");
  if (!cart || cart.length === 0) {
    return;
  }
  cart = JSON.parse(localStorage.getItem("doner-cart"));
  const item = cart.find((item) => item.name === obj.name);
  if (item.qty === MIN_QTY_OF_ITEM) {
    const itemIndex = cart.findIndex((item) => item.name === obj.name);
    cart.splice(itemIndex, PRODUCT_ITEM);
  }
  if (item.qty > MIN_QTY_OF_ITEM) {
    item.qty -= obj.qty;
    item.price -= obj.price;
  }
  localStorage.setItem("doner-cart", JSON.stringify(cart));
};

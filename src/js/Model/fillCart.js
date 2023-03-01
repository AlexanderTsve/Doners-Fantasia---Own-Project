import { LOCAL_STORAGE_DONER_CART_KEY } from "../config.js";
/**
 * Changes the cart array in the local storage - add new product or add additional item to an existing one.
 * @param {object} obj the product object to be added to the cart.
 */
export const fillCart = (obj) => {
  let cart = localStorage.getItem(LOCAL_STORAGE_DONER_CART_KEY);
  if (!cart) {
    localStorage.setItem(LOCAL_STORAGE_DONER_CART_KEY, JSON.stringify([]));
  }
  cart = JSON.parse(localStorage.getItem(LOCAL_STORAGE_DONER_CART_KEY));
  if (cart.some((item) => item.name === obj.name)) {
    const item = cart.find((item) => item.name === obj.name);
    item.qty += obj.qty;
    item.price += obj.price;
  }
  if (!cart.some((item) => item.name === obj.name)) {
    cart.push(obj);
  }
  localStorage.setItem(LOCAL_STORAGE_DONER_CART_KEY, JSON.stringify(cart));
};

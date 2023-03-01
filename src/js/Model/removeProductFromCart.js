import { PRODUCT_ITEM, LOCAL_STORAGE_DONER_CART_KEY } from "../config.js";
/**
 * Removes product object from the cart.
 * @param {string} name of the product to be removed
 * @returns if there is no cart in the local storage or if the cart is empty.
 */
export const removeProductFromCart = (name) => {
  let cart = localStorage.getItem(LOCAL_STORAGE_DONER_CART_KEY);
  if (!cart || cart.length === 0) {
    return;
  }
  cart = JSON.parse(localStorage.getItem(LOCAL_STORAGE_DONER_CART_KEY));
  const itemIndex = cart.findIndex((item) => item.name === name);
  cart.splice(itemIndex, PRODUCT_ITEM);
  localStorage.setItem(LOCAL_STORAGE_DONER_CART_KEY, JSON.stringify(cart));
};

import { LOCAL_STORAGE_DONER_CART_KEY } from "../config.js";
/**
 * Gets the cart array from the local storage.
 * @returns if there is no cart in the local storage.
 */
export const getChangedCart = () => {
  const cart = JSON.parse(localStorage.getItem(LOCAL_STORAGE_DONER_CART_KEY));
  if (!cart) {
    return;
  }
  return cart;
};

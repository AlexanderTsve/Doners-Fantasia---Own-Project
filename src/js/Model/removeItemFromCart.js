import {
  MIN_QTY_OF_ITEM,
  PRODUCT_ITEM,
  LOCAL_STORAGE_DONER_CART_KEY,
} from "../config.js";
/**
 * Removes one unit from the quantity of the respective product object, the whole object if there has been one unit only.
 * @param {Object} obj from which the function deducts one unit.
 * @returns if there is no cart in the local storage or if the cart is empty.
 */
export const removeItemFromCart = (obj) => {
  let cart = localStorage.getItem(LOCAL_STORAGE_DONER_CART_KEY);
  if (!cart || cart.length === 0) {
    return;
  }
  cart = JSON.parse(localStorage.getItem(LOCAL_STORAGE_DONER_CART_KEY));
  const item = cart.find((item) => item.name === obj.name);
  if (item.qty === MIN_QTY_OF_ITEM) {
    const itemIndex = cart.findIndex((item) => item.name === obj.name);
    cart.splice(itemIndex, PRODUCT_ITEM);
  }
  if (item.qty > MIN_QTY_OF_ITEM) {
    item.qty -= obj.qty;
    item.price -= obj.price;
  }
  localStorage.setItem(LOCAL_STORAGE_DONER_CART_KEY, JSON.stringify(cart));
};

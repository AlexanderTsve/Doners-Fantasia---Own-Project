import { fillCart } from "../Model/fillCart.js";
import { getChangedCart } from "../Model/getChangedCart.js";
import { checkLoginAndOrderFormData } from "../Model/checkLoginAndOrderFormData.js";
import { removeItemFromCart } from "../Model/removeItemFromCart.js";
import { removeProductFromCart } from "../Model/removeProductFromCart.js";
import productsView from "../Views/productsView.js";
import cartPageView from "../Views/cartPageView.js";
import * as controlOrderFormValidation from "./controlOrderFormValidation.js";
import { controlOrderFormSubmission } from "./controlOrderFormSubmission.js";
/**
 * Renders the cart tooltip and the cart page after changes in the data.
 */
export const renderCartData = () => {
  const cart = getChangedCart();
  productsView.renderCartTooltip(cart);
  cartPageView.render(cart, controlOrderFormSubmission);
};
/**
 * Adds the necessary handler functions for the respective buttons ('+','-','Remove Item') for each product in the cart.
 */
export const addChangeQtyHandlers = () => {
  cartPageView.addIncreaseCartQtyHandler(controlAddItemToCart);
  cartPageView.addDecreaseCartQtyHandler(controlDecreaseItemFromCart);
  cartPageView.addRemoveProductHandler(controlRemoveProductFromCart);
};
/**
 * Adds the necessary handler functions for the order form input fields.
 */
export const addOrderInputsHandlers = () => {
  cartPageView.addOrderFormInputHandler(
    controlOrderFormValidation.controlNamesValidation,
    checkLoginAndOrderFormData,
    "names"
  );
  cartPageView.addOrderFormInputHandler(
    controlOrderFormValidation.controlAddressValidation,
    checkLoginAndOrderFormData,
    "address"
  );
  cartPageView.addOrderFormInputHandler(
    controlOrderFormValidation.controlPhoneValidation,
    checkLoginAndOrderFormData,
    "phone"
  );
  cartPageView.addOrderFormInputHandler(
    controlOrderFormValidation.controlEmailValidation,
    checkLoginAndOrderFormData,
    "email"
  );
};
/**
 * Controls adding items from the menu page to the cart, and the rerendering of the new cart at the cart page and on the cart tooltip.
 * @param {Object} obj An object which contains the data necessary for the cart.
 */
export const controlAddingItemsToCart = (obj) => {
  fillCart(obj);
  renderCartData();
  addChangeQtyHandlers();
  addOrderInputsHandlers();
};
/**
 * Controls adding an item from the product-details page or from the cart page to the cart, and the rerendering of the new cart at the cart page and on the cart tooltip.
 * @param {Object} obj An object which contains the data necessary for the cart.
 */
export const controlAddItemToCart = (obj) => {
  fillCart(obj);
  renderCartData();
  addChangeQtyHandlers();
  addOrderInputsHandlers();
};
/**
 * Controls decreasing the respective product with one unit from the cart at the cart page, and the rerendering of the new cart at the cart page and on the cart tooltip.
 * @param {Object} obj An object which contains the data to be removed from the cart.
 */
export const controlDecreaseItemFromCart = (obj) => {
  removeItemFromCart(obj);
  renderCartData();
  addChangeQtyHandlers();
  if (getChangedCart() && getChangedCart().length > 0) {
    addOrderInputsHandlers();
  }
};
/**
 * Controls removing of the respective product from the cart at the cart page, and the rerendering of the new cart at the cart page and on the cart tooltip.
 * @param {String} name A string pointing out which product should be removed from the cart.
 */
export const controlRemoveProductFromCart = (name) => {
  removeProductFromCart(name);
  renderCartData();
  addChangeQtyHandlers();
  if (getChangedCart() && getChangedCart().length > 0) {
    addOrderInputsHandlers();
  }
};

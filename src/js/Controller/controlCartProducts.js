import * as bootstrap from "bootstrap";
import { fillCart } from "../Model/fillCart.js";
import { getChangedCart } from "../Model/getChangedCart.js";
import productsView from "../Views/productsView.js";
import cartPageView from "../Views/cartPageView.js";
import * as controlOrderFormValidation from "./controlOrderFormValidation.js";
import { checkLoginAndOrderFormData } from "../Model/checkLoginAndOrderFormData.js";
import { removeItemFromCart } from "../Model/removeItemFromCart.js";
import { removeProductFromCart } from "../Model/removeProductFromCart.js";
import controlOrderFormSubmission from "./controlOrderFormSubmission.js";
export const renderCartData = () => {
  const cart = getChangedCart();
  productsView.renderCartTooltip(cart);
  cartPageView.render(cart);
};
export const addChangeQtyHandlers = () => {
  cartPageView.addIncreaseCartQtyHandler(controlAddItemToCart);
  cartPageView.addDecreaseCartQtyHandler(controlDecreaseItemFromCart);
  cartPageView.addRemoveProductHandler(controlRemoveProductFromCart);
};
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
export const controlAddingItemsToCart = (obj) => {
  fillCart(obj);
  renderCartData();
  addChangeQtyHandlers();
  addOrderInputsHandlers();
  controlOrderFormSubmission();
};
export const controlAddItemToCart = (obj) => {
  fillCart(obj);
  renderCartData();
  addChangeQtyHandlers();
  addOrderInputsHandlers();
  controlOrderFormSubmission();
};
export const controlDecreaseItemFromCart = (obj) => {
  removeItemFromCart(obj);
  renderCartData();
  addChangeQtyHandlers();
  if (getChangedCart() && getChangedCart().length > 0) {
    addOrderInputsHandlers();
    controlOrderFormSubmission();
  }
};
export const controlRemoveProductFromCart = (name) => {
  removeProductFromCart(name);
  renderCartData();
  addChangeQtyHandlers();
  if (getChangedCart() && getChangedCart().length > 0) {
    addOrderInputsHandlers();
    controlOrderFormSubmission();
  }
};

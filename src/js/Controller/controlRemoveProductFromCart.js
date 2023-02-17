import * as bootstrap from "bootstrap";
import { removeProductFromCart } from "../Model/removeProductFromCart.js";
import * as controlOrderFormValidation from "./controlOrderFormValidation.js";
import productsView from "../Views/productsView.js";
import cartPageView from "../Views/cartPageView.js";
import { getChangedCart } from "../Model/getChangedCart.js";
import { controlAddItemToCart } from "./controlAddItemToCart.js";
import { controlDecreaseItemFromCart } from "./controlDecreaseItemFromCart.js";
export const controlRemoveProductFromCart = (name) => {
  removeProductFromCart(name);
  const cart = getChangedCart();
  productsView.renderCartTooltip(cart);
  cartPageView.render(cart);
  cartPageView.addIncreaseCartQtyHandler(controlAddItemToCart);
  cartPageView.addDecreaseCartQtyHandler(controlDecreaseItemFromCart);
  cartPageView.addRemoveProductHandler(controlRemoveProductFromCart);
  cartPageView.addOrderFormInputHandler(
    controlOrderFormValidation.controlNamesValidation,
    "names"
  );
  cartPageView.addOrderFormInputHandler(
    controlOrderFormValidation.controlAddressValidation,
    "address"
  );
  cartPageView.addOrderFormInputHandler(
    controlOrderFormValidation.controlPhoneValidation,
    "phone"
  );
  cartPageView.addOrderFormInputHandler(
    controlOrderFormValidation.controlEmailValidation,
    "email"
  );
};

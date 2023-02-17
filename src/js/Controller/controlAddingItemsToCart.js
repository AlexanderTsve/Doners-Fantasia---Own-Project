import * as bootstrap from "bootstrap";
import { validateAddToCartInput } from "../Model/validateAddToCartInput.js";
import { fillCart } from "../Model/fillCart.js";
import { getChangedCart } from "../Model/getChangedCart.js";
import productsView from "../Views/productsView.js";
import cartPageView from "../Views/cartPageView.js";
import { controlAddItemToCart } from "./controlAddItemToCart.js";
import { controlDecreaseItemFromCart } from "./controlDecreaseItemFromCart.js";
import { controlRemoveProductFromCart } from "./controlRemoveProductFromCart.js";
import * as controlOrderFormValidation from "./controlOrderFormValidation.js";
export const controlAddingItemsToCart = (obj) => {
  const validationResult = validateAddToCartInput(obj);
  if (!validationResult) {
    return;
  }
  fillCart(obj);
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

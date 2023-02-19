import * as bootstrap from "bootstrap";
import { fillCart } from "../Model/fillCart.js";
import productsView from "../Views/productsView.js";
import cartPageView from "../Views/cartPageView.js";
import { getChangedCart } from "../Model/getChangedCart.js";
import * as controlOrderFormValidation from "./controlOrderFormValidation.js";
import { controlDecreaseItemFromCart } from "./controlDecreaseItemFromCart.js";
import { controlRemoveProductFromCart } from "./controlRemoveProductFromCart.js";
import { checkLoginAndOrderFormData } from "../Model/checkLoginAndOrderFormData.js";
export const controlAddItemToCart = (obj) => {
  fillCart(obj);
  const cart = getChangedCart();
  productsView.renderCartTooltip(cart);
  cartPageView.render(cart);
  cartPageView.addIncreaseCartQtyHandler(controlAddItemToCart);
  cartPageView.addDecreaseCartQtyHandler(controlDecreaseItemFromCart);
  cartPageView.addRemoveProductHandler(controlRemoveProductFromCart);
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

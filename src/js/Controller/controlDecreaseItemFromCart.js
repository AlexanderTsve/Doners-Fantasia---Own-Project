import * as bootstrap from "bootstrap";
import { removeItemFromCart } from "../Model/removeItemFromCart.js";
import productsView from "../Views/productsView.js";
import cartPageView from "../Views/cartPageView.js";
import { getChangedCart } from "../Model/getChangedCart.js";
import { controlAddItemToCart } from "./controlAddItemToCart.js";
import { controlRemoveProductFromCart } from "./controlRemoveProductFromCart.js";
export const controlDecreaseItemFromCart = (obj) => {
  removeItemFromCart(obj);
  const cart = getChangedCart();
  productsView.renderCartTooltip(cart);
  cartPageView.render(cart);
  cartPageView.addIncreaseCartQtyHandler(controlAddItemToCart);
  cartPageView.addDecreaseCartQtyHandler(controlDecreaseItemFromCart);
  cartPageView.addRemoveProductHandler(controlRemoveProductFromCart);
};

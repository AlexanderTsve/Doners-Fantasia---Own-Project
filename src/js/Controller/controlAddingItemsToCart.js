import * as bootstrap from "bootstrap";
import { validateAddToCartInput } from "../Model/validateAddToCartInput.js";
import { fillCart } from "../Model/fillCart.js";
import { getChangedCart } from "../Model/getChangedCart.js";
import productsView from "../Views/productsView.js";
import cartPageView from "../Views/cartPageView.js";
export const controlAddingItemsToCart = (obj) => {
  const validationResult = validateAddToCartInput(obj);
  if (!validationResult) {
    return;
  }
  fillCart(obj);
  const cart = getChangedCart();
  productsView.renderCartTooltip(cart);
  cartPageView.render(cart);
};
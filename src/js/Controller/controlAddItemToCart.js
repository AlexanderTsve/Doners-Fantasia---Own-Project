import * as bootstrap from "bootstrap";
import { fillCart } from "../Model/fillCart.js";
import productsView from "../Views/productsView.js";
import cartPageView from "../Views/cartPageView.js";
import { getChangedCart } from "../Model/getChangedCart.js";
export const controlAddItemToCart = (obj) => {
  fillCart(obj);
  const cart = getChangedCart();
  productsView.renderCartTooltip(cart);
  cartPageView.render(cart);
};

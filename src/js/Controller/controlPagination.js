import * as bootstrap from "bootstrap";
import productsView from "../Views/productsView.js";
import paginationView from "../Views/paginationView.js";
import { getProductsPage } from "../Model/getProductsPage.js";
import { controlAddingItemsToCart } from "./controlAddingItemsToCart.js";
export const controlPagination = (goToPage) => {
  productsView.render(getProductsPage(goToPage));
  paginationView.render(state);
  productsView.addToCartBtnHandler(controlAddingItemsToCart);
};

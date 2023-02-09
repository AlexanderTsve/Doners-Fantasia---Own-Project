import * as bootstrap from "bootstrap";
import { async } from "regenerator-runtime";
import "regenerator-runtime/runtime";
import { state } from "../Model/state.js";
import { loadProducts } from "../Model/loadProducts.js";
import { getProductsPage } from "../Model/getProductsPage.js";
import productsView from "../Views/productsView.js";
import paginationView from "../Views/paginationView.js";
import { controlAddingItemsToCart } from "./controlAddingItemsToCart.js";
export const controlProducts = async () => {
  try {
    productsView.renderSpinner();
    await loadProducts();
    if (!state.products.every(Boolean) || state.products.length === 0) {
      throw new Error("One or more of the products do not exist!");
    }
    productsView.render(getProductsPage());
    paginationView.render(state);
    productsView.addToCartBtnHandler(controlAddingItemsToCart);
  } catch (err) {
    productsView.renderError(err.message);
  }
};

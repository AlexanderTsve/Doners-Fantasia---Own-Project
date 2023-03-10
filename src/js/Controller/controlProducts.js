import { async } from "regenerator-runtime";
import "regenerator-runtime/runtime";
import { state } from "../Model/state.js";
import { loadProducts } from "../Model/loadProducts.js";
import { getProductsPage } from "../Model/getProductsPage.js";
import productsView from "../Views/productsView.js";
import paginationView from "../Views/paginationView.js";
import * as controlCartProducts from "./controlCartProducts.js";
/**
 * Controls the rendering of the products on the menu page.
 */
export const controlProducts = async () => {
  try {
    productsView.renderSpinner();
    await loadProducts();
    if (!state.products.every(Boolean) || state.products.length === 0) {
      throw new Error("One or more of the products do not exist!");
    }
    productsView.render(getProductsPage());
    paginationView.render(state);
    productsView.addToCartBtnHandler(
      controlCartProducts.controlAddingItemsToCart
    );
  } catch (err) {
    productsView.renderError(err.message);
  }
};

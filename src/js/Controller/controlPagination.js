import { state } from "../Model/state.js";
import { getProductsPage } from "../Model/getProductsPage.js";
import productsView from "../Views/productsView.js";
import paginationView from "../Views/paginationView.js";
import * as controlCartProducts from "./controlCartProducts.js";
/**
 * Controls the pagination on the menu page.
 * @param {number} goToPage the number of the page which should be shown
 */
export const controlPagination = (goToPage) => {
  productsView.render(getProductsPage(goToPage));
  paginationView.render(state);
  productsView.addToCartBtnHandler(
    controlCartProducts.controlAddingItemsToCart
  );
};

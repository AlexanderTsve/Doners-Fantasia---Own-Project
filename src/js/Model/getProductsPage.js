import { state } from "./state.js";
import { START_PAGE } from "../config.js";
/**
 * Gets the correct page from the pagination navigation.
 * @param {Number} page which page should be opened.
 * @returns {Array} the correct array of products to be rendered on the menu page.
 */
export const getProductsPage = (page = state.productsPageNumber) => {
  const start = (page - START_PAGE) * state.productsPerPage;
  const end = page * state.productsPerPage;
  if (state.products.length < start) {
    state.productsPageNumber = START_PAGE;
    return state.products;
  }
  state.productsPageNumber = page;
  return state.products.slice(start, end);
};

import { state } from "./state.js";
export const getProductsPage = (page = state.productsPageNumber) => {
  const start = (page - 1) * state.productsPerPage;
  const end = page * state.productsPerPage;
  if (state.products.length < start) {
    state.productsPageNumber = 1;
    return state.products;
  }
  state.productsPageNumber = page;
  return state.products.slice(start, end);
};

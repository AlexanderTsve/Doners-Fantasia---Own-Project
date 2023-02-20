import * as bootstrap from "bootstrap";
import { async } from "regenerator-runtime";
import "regenerator-runtime/runtime";
import { state } from "../Model/state.js";
import { loadSearchResults } from "../Model/loadSearchResults.js";
import { getProductsPage } from "../Model/getProductsPage.js";
import searchView from "../Views/searchView.js";
import dropdownFilterView from "../Views/dropdownFilterView.js";
import productsView from "../Views/productsView.js";
import paginationView from "../Views/paginationView.js";
import * as controlCartProducts from "./controlCartProducts.js";
export const controlSearchResults = async () => {
  try {
    const query = searchView.getQuery();
    const dropdownValue = dropdownFilterView.getDropdownValue();
    productsView.renderSpinner();
    await loadSearchResults(query, dropdownValue);
    if (!state.products.every(Boolean) || state.products.length === 0) {
      throw new Error(
        `There is no existing product with ${query} in its name!`
      );
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

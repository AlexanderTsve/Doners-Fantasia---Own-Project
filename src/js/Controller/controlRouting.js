import { state } from "../Model/state.js";
import dropdownFilterView from "../Views/dropdownFilterView.js";
import searchView from "../Views/searchView.js";
import { controlProducts } from "./controlProducts.js";
import { controlRestaurants } from "./controlRestaurants.js";
import { controlProductDetails } from "./controlProductDetails.js";
import { toggleCorrectPage } from "../helpers.js";
import { URL_ARR } from "../config.js";
/**
 * Clears the search field and changes the category to 'none'.
 */
const clearDropdownAndSearchField = () => {
  dropdownFilterView.clearValue();
  searchView.clearSearchValue();
};
/**
 * Renders the correct page depending on the hash param.
 * @param {String} hash a string indicating the current hash.
 */
const togglePagesHelper = (hash) => {
  toggleCorrectPage(hash);
  if (hash === "menu-page") {
    controlProducts();
  }
  if (hash === "restaurants-page") {
    controlRestaurants();
  }
};
/**
 * Changes the hash and the page to the menu page due to some reason.
 */
const changeToMenuPage = () => {
  location.hash = URL_ARR[0];
  const currentPage = document.getElementById(URL_ARR[0]);
  currentPage.classList.remove("hidden");
  controlProducts();
};
/**
 * Controls changing the hash and the respective page.
 */
export const controlUrlChange = () => {
  clearDropdownAndSearchField();
  const hash = location.hash.slice(1);
  if (
    URL_ARR.every((urlEnd) => urlEnd !== hash) &&
    !hash.includes("details-page")
  ) {
    changeToMenuPage();
  }
  if (URL_ARR.some((urlEnd) => urlEnd === hash)) {
    togglePagesHelper(hash);
  }
};
/**
 * Controls changing the respective page depending on the hash.
 * @param {String} hash a string indicating the current hash.
 */
export const controlChangePathname = (hash) => {
  clearDropdownAndSearchField();
  togglePagesHelper(hash);
};
/**
 * Controls changing the hash and the respective page.
 */
export const controlChangeHash = () => {
  clearDropdownAndSearchField();
  const hash = location.hash.slice(1);
  if (
    (URL_ARR.every((urlEnd) => urlEnd !== hash) &&
      !hash.includes("details-page")) ||
    (hash.includes("order-history") &&
      Object.values(state.loggedUser).length === 0)
  ) {
    changeToMenuPage();
  }
  if (URL_ARR.some((urlEnd) => urlEnd === hash)) {
    togglePagesHelper(hash);
  }
  if (hash.includes("details-page")) {
    toggleCorrectPage(hash.split("/")[0]);
    controlProductDetails();
  }
};

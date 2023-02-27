import * as bootstrap from "bootstrap";
import { controlProducts } from "./controlProducts.js";
import { controlRestaurants } from "./controlRestaurants.js";
import { toggleCorrectPage } from "../helpers.js";
import dropdownFilterView from "../Views/dropdownFilterView.js";
import searchView from "../Views/searchView.js";
import { URL_ARR } from "../config.js";
import { controlProductDetails } from "./controlProductDetails.js";
const clearDropdownAndSearchField = () => {
  dropdownFilterView.clearValue();
  searchView.clearSearchValue();
};
const togglePagesHelper = (hash) => {
  toggleCorrectPage(hash);
  if (hash === "menu-page") {
    controlProducts();
  }
  if (hash === "restaurants-page") {
    controlRestaurants();
  }
};
export const controlUrlChange = () => {
  clearDropdownAndSearchField();
  const hash = location.hash.slice(1);
  if (
    URL_ARR.every((urlEnd) => urlEnd !== hash) &&
    !hash.includes("details-page")
  ) {
    location.hash = URL_ARR[0];
    const currentPage = document.getElementById(URL_ARR[0]);
    currentPage.classList.remove("hidden");
    controlProducts();
  }
  if (URL_ARR.some((urlEnd) => urlEnd === hash)) {
    togglePagesHelper(hash);
  }
};
export const controlChangePathname = (hash) => {
  clearDropdownAndSearchField();
  togglePagesHelper(hash);
};
export const controlChangeHash = () => {
  clearDropdownAndSearchField();
  const hash = location.hash.slice(1);
  if (
    URL_ARR.every((urlEnd) => urlEnd !== hash) &&
    !hash.includes("details-page")
  ) {
    location.hash = URL_ARR[0];
    const currentPage = document.getElementById(URL_ARR[0]);
    currentPage.classList.remove("hidden");
    controlProducts();
  }
  if (URL_ARR.some((urlEnd) => urlEnd === hash)) {
    togglePagesHelper(hash);
  }
  if (hash.includes("details-page")) {
    toggleCorrectPage(hash.split("/")[0]);
    controlProductDetails();
  }
};

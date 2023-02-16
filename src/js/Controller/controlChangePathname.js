import * as bootstrap from "bootstrap";
import { controlProducts } from "./controlProducts.js";
import { controlRestaurants } from "./controlRestaurants.js";
import { toggleCorrectPage } from "../helpers.js";
import { clearDropdownAndSearchField } from "./clearDropdownAndSearchField.js";
export const controlChangePathname = (hash) => {
  clearDropdownAndSearchField();
  toggleCorrectPage(hash);
  if (hash === "menu-page") {
    controlProducts();
  }
  if (hash === "restaurants-page") {
    controlRestaurants();
  }
};

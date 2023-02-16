import * as bootstrap from "bootstrap";
import { controlProducts } from "./controlProducts.js";
import { controlRestaurants } from "./controlRestaurants.js";
import { toggleCorrectPage } from "../helpers.js";
import { controlProductDetails } from "./controlProductDetails.js";
import { clearDropdownAndSearchField } from "./clearDropdownAndSearchField.js";
import { URL_ARR } from "../config.js";
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
    toggleCorrectPage(hash);
    if (hash === "menu-page") {
      controlProducts();
    }
    if (hash === "restaurants-page") {
      controlRestaurants();
    }
  }
};

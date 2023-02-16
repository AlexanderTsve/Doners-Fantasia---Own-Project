import { controlProductDetails } from "./controlProductDetails.js";
import { clearDropdownAndSearchField } from "./clearDropdownAndSearchField.js";
import { URL_ARR } from "../config.js";
import { controlProducts } from "./controlProducts.js";
import { toggleCorrectPage } from "../helpers.js";
import { controlRestaurants } from "./controlRestaurants.js";
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
    toggleCorrectPage(hash);
    if (hash === "menu-page") {
      controlProducts();
    }
    if (hash === "restaurants-page") {
      controlRestaurants();
    }
  }
  if (hash.includes("details-page")) {
    toggleCorrectPage(hash.split("/")[0]);
    controlProductDetails();
  }
};

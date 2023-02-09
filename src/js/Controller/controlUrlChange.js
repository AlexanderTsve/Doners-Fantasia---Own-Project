import * as bootstrap from "bootstrap";
import { controlProducts } from "./controlProducts.js";
import { controlRestaurants } from "./controlRestaurants.js";
import { controlProductDetails } from "./controlProductDetails.js";
import { clearDropdownAndSearchField } from "./clearDropdownAndSearchField.js";
import { URL_ARR } from "../config.js";
export const controlUrlChange = () => {
  clearDropdownAndSearchField();
  const pathname = window.location.pathname;
  if (
    URL_ARR.every((path) => path !== pathname) &&
    !pathname.includes("details-page")
  ) {
    window.location.href += "menu-page";
  }
  if (URL_ARR.some((path) => path === pathname)) {
    const currentPage = document.getElementById(
      pathname.split("/").join("").trim()
    );
    currentPage.classList.remove("hidden");
    if (pathname === "/menu-page") {
      controlProducts();
    }
    if (pathname === "/restaurants-page") {
      controlRestaurants();
    }
  }
  if (pathname.includes("details-page")) {
    const detailsPage = document.getElementById("details-page");
    detailsPage.classList.remove("hidden");
    controlProductDetails(pathname.replace("/details-page/", ""));
  }
};

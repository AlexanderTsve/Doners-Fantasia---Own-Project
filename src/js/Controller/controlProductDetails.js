import { async } from "regenerator-runtime";
import "regenerator-runtime/runtime";
import { state } from "../Model/state.js";
import { loadProductDetails } from "../Model/loadProductDetails.js";
import productDetailsView from "../Views/productDetailsView.js";
import * as controlCartProducts from "./controlCartProducts.js";
/**
 * Controls what should be rendered on the product details page.
 */
export const controlProductDetails = async () => {
  try {
    productDetailsView.renderSpinner();
    await loadProductDetails(location.hash.split("/")[1]);
    if (!state.productDetails) {
      throw new Error("There is no existing product with such ID!");
    }
    productDetailsView.render(state.productDetails);
    productDetailsView.addToCartHandler(
      controlCartProducts.controlAddItemToCart
    );
  } catch (err) {
    productDetailsView.renderError(err.message);
  }
};

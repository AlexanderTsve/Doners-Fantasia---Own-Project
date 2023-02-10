import * as bootstrap from "bootstrap";
import { async } from "regenerator-runtime";
import "regenerator-runtime/runtime";
import { state } from "../Model/state.js";
import { loadProductDetails } from "../Model/loadProductDetails.js";
import productDetailsView from "../Views/productDetailsView.js";
import { controlAddItemToCart } from "./controlAddItemToCart.js";
export const controlProductDetails = async (productId) => {
  try {
    productDetailsView.renderSpinner();
    await loadProductDetails(productId);
    if (!state.productDetails) {
      throw new Error("There is no existing product with such ID!");
    }
    productDetailsView.render(state.productDetails);
    productDetailsView.addToCartHandler(controlAddItemToCart);
  } catch (err) {
    productDetailsView.renderError(err.message);
  }
};

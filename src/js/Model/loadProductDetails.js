import { GET_PRODUCTS_URL } from "../config.js";
import { makeApiCall } from "../helpers.js";
import { state } from "./state.js";
import { async } from "regenerator-runtime";
export const loadProductDetails = async (productId) => {
  try {
    const data = await makeApiCall(GET_PRODUCTS_URL);
    state.productDetails = Object.values(data)[0].find(
      (product) => product.productId === productId
    );
  } catch (err) {
    throw err;
  }
};

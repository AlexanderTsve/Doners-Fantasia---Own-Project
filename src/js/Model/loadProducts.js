import { state } from "./state.js";
import { GET_PRODUCTS_URL } from "../config.js";
import { makeApiCall, returnProductObjects } from "../helpers.js";
import { async } from "regenerator-runtime";
export const loadProducts = async () => {
  try {
    const data = await makeApiCall(GET_PRODUCTS_URL);
    state.products = returnProductObjects(Object.values(data)[0]);
  } catch (err) {
    throw err;
  }
};

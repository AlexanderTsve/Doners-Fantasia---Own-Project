import { state } from "./state.js";
import { GET_RESTAURANTS_URL } from "../config.js";
import { makeApiCall } from "../helpers.js";
import { async } from "regenerator-runtime";
/**
 * Loads the data regarding the restaurants.
 */
export const loadRestaurants = async () => {
  try {
    const data = await makeApiCall(GET_RESTAURANTS_URL);
    state.restaurants = Object.values(data)[0];
  } catch (err) {
    throw err;
  }
};

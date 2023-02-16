import * as bootstrap from "bootstrap";
import { async } from "regenerator-runtime";
import "regenerator-runtime/runtime";
import { state } from "../Model/state.js";
import { loadRestaurants } from "../Model/loadRestaurants.js";
import restaurantsView from "../Views/restaurantsView.js";
export const controlRestaurants = async () => {
  try {
    restaurantsView.renderSpinner();
    await loadRestaurants();
    if (!state.restaurants.every(Boolean) || state.restaurants.length === 0) {
      throw new Error("One or more of the restaurants do not exist!");
    }
    restaurantsView.render(state.restaurants);
    if (!document.getElementById("restaurants-map-pane").hasChildNodes()) {
      restaurantsView.generateMap(state.restaurants);
    }
  } catch (err) {
    restaurantsView.renderError(err.message);
  }
};

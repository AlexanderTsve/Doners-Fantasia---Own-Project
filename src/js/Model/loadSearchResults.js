import { GET_PRODUCTS_URL, INITIAL_DROPDOWN_OPTION } from "../config.js";
import { makeApiCall, returnProductObjects } from "../helpers.js";
import { state } from "./state.js";
import { async } from "regenerator-runtime";
/**
 * Loads the correct data depending on the search field input and the chosen dropdown option.
 * @param {string} query the search field input entered by the user.
 * @param {string} dropdownValue chosen by the user.
 */
export const loadSearchResults = async (query, dropdownValue) => {
  try {
    const data = await makeApiCall(GET_PRODUCTS_URL);
    if (!query && dropdownValue === INITIAL_DROPDOWN_OPTION) {
      state.search.results = [];
      state.dropdownFilter.results = [];
      state.products = returnProductObjects(Object.values(data)[0]);
    }
    if (query && dropdownValue === INITIAL_DROPDOWN_OPTION) {
      state.search.query = query;
      state.search.results = Object.values(data)[0].filter((product) =>
        product.name.toLowerCase().includes(state.search.query.toLowerCase())
      );
      state.dropdownFilter.results = [];
      state.products = returnProductObjects(state.search.results);
    }
    if (query && dropdownValue !== INITIAL_DROPDOWN_OPTION) {
      state.search.query = query;
      state.dropdownFilter.dropdownValue = dropdownValue;
      state.search.results = Object.values(data)[0].filter((product) =>
        product.name.toLowerCase().includes(state.search.query.toLowerCase())
      );
      state.dropdownFilter.results = Object.values(data)[0].filter(
        (product) =>
          product.category.toLowerCase() === state.dropdownFilter.dropdownValue
      );
      state.products = returnProductObjects(
        state.search.results.filter((product) =>
          state.dropdownFilter.results.includes(product)
        )
      );
    }
    if (!query && dropdownValue !== INITIAL_DROPDOWN_OPTION) {
      state.dropdownFilter.dropdownValue = dropdownValue;
      state.search.results = [];
      state.dropdownFilter.results = Object.values(data)[0].filter(
        (product) =>
          product.category.toLowerCase() === state.dropdownFilter.dropdownValue
      );
      state.products = returnProductObjects(state.dropdownFilter.results);
    }
  } catch (err) {
    throw err;
  }
};

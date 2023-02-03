import { GET_PRODUCTS_URL } from "../config.js";
import { makeApiCall, returnProductObjects } from "../helpers.js";
import { state } from "./state.js";
import { async } from "regenerator-runtime";

export const loadSearchResults = async (query, dropdownValue) => {
  try {
    const data = await makeApiCall(GET_PRODUCTS_URL);
    if (!query && dropdownValue === "none") {
      state.search.results = [];
      state.dropdownFilter.results = [];
      state.products = returnProductObjects(Object.values(data)[0]);
    }
    if (query && dropdownValue === "none") {
      state.search.query = query;
      state.search.results = Object.values(data)[0].filter((product) =>
        product.name.toLowerCase().includes(state.search.query.toLowerCase())
      );
      state.dropdownFilter.results = [];
      state.products = returnProductObjects(state.search.results);
    }
    if (query && dropdownValue !== "none") {
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
    if (!query && dropdownValue !== "none") {
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

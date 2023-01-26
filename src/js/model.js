import { async } from "regenerator-runtime";
import { makeApiCall, returnProductObjects } from "./helpers.js";
import { RES_PER_PAGE } from "./config.js";
import { GET_PRODUCTS_URL, GET_RESTAURANTS_URL } from "./config.js";
export const state = {
  productDetails: {},
  products: [],
  productsPerPage: RES_PER_PAGE,
  productsPageNumber: 1,
  search: {
    query: "",
    results: [],
  },
  dropdownFilter: {
    dropdownValue: "none",
    results: [],
  },
  restaurants: [],
};

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

export const loadProducts = async () => {
  try {
    const data = await makeApiCall(GET_PRODUCTS_URL);
    state.products = returnProductObjects(Object.values(data)[0]);
  } catch (err) {
    throw err;
  }
};

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
export const getProductsPage = (page = state.productsPageNumber) => {
  const start = (page - 1) * state.productsPerPage;
  const end = page * state.productsPerPage;
  if (state.products.length < start) {
    state.productsPageNumber = 1;
    return state.products;
  }
  state.productsPageNumber = page;
  return state.products.slice(start, end);
};

export const loadRestaurants = async () => {
  try {
    const data = await makeApiCall(GET_RESTAURANTS_URL);
    state.restaurants = Object.values(data)[0];
  } catch (err) {
    throw err;
  }
};

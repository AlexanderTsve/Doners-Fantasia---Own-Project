import { RES_PER_PAGE, START_PAGE } from "../config.js";
/**
 * The main object reflecting the user's actions.
 */
export const state = {
  productDetails: {},
  products: [],
  productsPerPage: RES_PER_PAGE,
  productsPageNumber: START_PAGE,
  search: {
    query: "",
    results: [],
  },
  dropdownFilter: {
    dropdownValue: "none",
    results: [],
  },
  restaurants: [],
  feedbackFormData: {
    nameContent: "",
    emailContent: "",
    phoneContent: "",
    feedbackContent: "",
    nameContentIsOk: false,
    emailContentIsOk: false,
    phoneContentIsOk: false,
    feedbackContentIsOk: false,
  },
  registrationFormData: {
    emailContent: "",
    phoneContent: "",
    passwordContent: "",
    confirmPasswordContent: "",
    addressContent: "",
    emailContentIsOk: false,
    phoneContentIsOk: false,
    passwordContentIsOk: false,
    confirmPasswordContentIsOk: false,
    addressContentIsOk: false,
  },
  loginFormData: {
    emailContent: "",
    passwordContent: "",
  },
  loginFormDataIsOk: false,
  loggedUser: JSON.parse(localStorage.getItem("rememberUser")) || {},
  loggedUserId: "",
  orderData: {
    nameContent: "",
    emailContent: "",
    phoneContent: "",
    addressContent: "",
    nameContentIsOk: false,
    emailContentIsOk: false,
    phoneContentIsOk: false,
    addressContentIsOk: false,
  },
  orderDataIsOk: false,
};

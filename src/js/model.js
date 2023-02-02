import { async } from "regenerator-runtime";
import {
  makeApiCall,
  returnProductObjects,
  sendDataRequest,
  sendAuthData,
  sendRegistrationData,
  getUsers,
} from "./helpers.js";
import {
  RES_PER_PAGE,
  GET_PRODUCTS_URL,
  GET_RESTAURANTS_URL,
  POST_FEEDBACKS_URL,
  POST_REGISTRATION_AUTH_URL,
  USERS_URL,
  POST_LOGIN_URL,
  REGEX_EMAIL,
  REGEX_PASSWORD,
  REGEX_NAME,
  REGEX_PHONE,
  REGISTRATION_AUTH_ERROR,
  LOGIN_AUTH_ERROR,
} from "./config.js";
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
  loggedUser: {},
  isLogged: false,
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
export const sendFeedback = async () => {
  return await sendDataRequest(POST_FEEDBACKS_URL, state.feedbackFormData);
};
export const validateFeedbackName = (dataObj) => {
  try {
    const { nameContent } = dataObj;
    state.feedbackFormData.nameContent = nameContent;
    const regName = REGEX_NAME;
    if (!regName.test(nameContent) || !nameContent) {
      throw new Error("Fill in valid names!");
    }
    state.feedbackFormData.nameContentIsOk = true;
  } catch (err) {
    throw err;
  }
};
export const validateFeedbackEmail = (dataObj) => {
  try {
    const { emailContent } = dataObj;
    state.feedbackFormData.emailContent = emailContent;
    const regEmail = REGEX_EMAIL;
    if (!regEmail.test(emailContent) || !emailContent) {
      throw new Error("Fill in a valid email address!");
    }
    state.feedbackFormData.emailContentIsOk = true;
  } catch (err) {
    throw err;
  }
};
export const validateFeedbackPhone = (dataObj) => {
  try {
    const { phoneContent } = dataObj;
    state.feedbackFormData.phoneContent = phoneContent;
    const regPhone = REGEX_PHONE;
    if (!regPhone.test(phoneContent) || !phoneContent) {
      throw new Error(
        "Fill in a valid gsm number - starting with +3598... or 08...!"
      );
    }
    state.feedbackFormData.phoneContentIsOk = true;
  } catch (err) {
    throw err;
  }
};
export const validateFeedbackFieldInput = (dataObj) => {
  try {
    const { feedbackContent } = dataObj;
    state.feedbackFormData.feedbackContent = feedbackContent;
    if (!feedbackContent) {
      throw new Error("Fill in the feedback field!");
    }
    state.feedbackFormData.feedbackContentIsOk = true;
  } catch (err) {
    throw err;
  }
};
export const validateRegistrationEmail = (dataObj) => {
  const { emailContent } = dataObj;
  state.registrationFormData.emailContent = emailContent;
  const regEmail = REGEX_EMAIL;
  state.registrationFormData.emailContentIsOk =
    !regEmail.test(emailContent) || !emailContent ? false : true;
};
export const validateRegistrationPhone = (dataObj) => {
  const { phoneContent } = dataObj;
  state.registrationFormData.phoneContent = phoneContent;
  const regPhone = REGEX_PHONE;
  state.registrationFormData.phoneContentIsOk =
    !regPhone.test(phoneContent) || !phoneContent ? false : true;
};
export const validateRegistrationPassword = (dataObj) => {
  const { passwordContent } = dataObj;
  state.registrationFormData.passwordContent = passwordContent;
  const regPassword = REGEX_PASSWORD;
  state.registrationFormData.passwordContentIsOk =
    !regPassword.test(passwordContent) || !passwordContent ? false : true;
};
export const validateRegistrationConfirmPassword = (dataObj) => {
  const { passwordConfirmContent } = dataObj;
  state.registrationFormData.confirmPasswordContent = passwordConfirmContent;
  state.registrationFormData.confirmPasswordContentIsOk =
    state.registrationFormData.passwordContent !== passwordConfirmContent ||
    !passwordConfirmContent
      ? false
      : true;
};
export const validateRegistrationAddress = (dataObj) => {
  const { addressContent } = dataObj;
  state.registrationFormData.addressContent = addressContent;
  state.registrationFormData.addressContentIsOk =
    addressContent.length < 20 ? false : true;
};
export const validateRegistrationForm = () => {
  return (
    state.registrationFormData.addressContentIsOk &&
    state.registrationFormData.confirmPasswordContentIsOk &&
    state.registrationFormData.emailContentIsOk &&
    state.registrationFormData.passwordContentIsOk &&
    state.registrationFormData.phoneContentIsOk
  );
};
export const submitRegistrationForm = async () => {
  try {
    await sendAuthData(
      POST_REGISTRATION_AUTH_URL,
      state.registrationFormData,
      REGISTRATION_AUTH_ERROR
    );
    await sendRegistrationData(USERS_URL, state.registrationFormData);
    return "Your registration has been successful!";
  } catch (err) {
    return err.message;
  }
};
export const clearRegistrationState = () => {
  state.registrationFormData = {
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
  };
};
export const validateLoginForm = (dataObj) => {
  const { emailContent } = dataObj;
  const { passwordContent } = dataObj;
  state.loginFormData.emailContent = emailContent;
  state.loginFormData.passwordContent = passwordContent;
  const regEmail = REGEX_EMAIL;
  const regPassword = REGEX_PASSWORD;
  state.loginFormDataIsOk =
    emailContent.length > 0 &&
    passwordContent.length > 0 &&
    regEmail.test(emailContent) &&
    regPassword.test(passwordContent)
      ? true
      : false;
};
export const submitLoginForm = async () => {
  try {
    await sendAuthData(POST_LOGIN_URL, state.loginFormData, LOGIN_AUTH_ERROR);
    const dataArr = await getUsers(USERS_URL);
    state.loggedUser = Object.values(dataArr).find(
      (user) => user.email === state.loginFormData.emailContent
    );
    state.isLogged = true;
  } catch (err) {
    throw err;
  }
};
export const clearLoginState = () => {
  state.loginFormData = {
    emailContent: "",
    passwordContent: "",
  };
  state.loginFormDataIsOk = false;
};

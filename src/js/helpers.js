import { async } from "regenerator-runtime";
import "regenerator-runtime/runtime";
import * as images from "../img/products_imgs/*.png";
/**
 * Makes a GET request to some url.
 * @param {string} url to which the function is sending a request.
 * @returns {object}
 */
export const makeApiCall = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `There is something wrong with the request! Request status: ${response.status}`
    );
  }
  const data = await response.json();
  return data;
};
/**
 * Sends a POST request with the data from the submitted feedback form.
 * @param {string} url to which the function is sending a request.
 * @param {object} data contains all of the data from the feedback form.
 * @returns {string} indicating whether the request has been successful.
 */
export const sendDataRequest = async (url, data) => {
  const initObj = {
    method: "POST",
    body: JSON.stringify({
      clientName: data.nameContent,
      clientEmail: data.emailContent,
      clientPhone: data.phoneContent,
      clientFeedback: data.feedbackContent,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(url, initObj);
  if (!response.ok) {
    return "There is something wrong with the request! No data has been sent!";
  }
  return "Your feedback has been sent successfully! Thank you!";
};
/**
 * Sends a POST request to the respective url - sends the login data.
 * @param {string} url to which the function is sending a request.
 * @param {object} data contains all of the data from the login form.
 * @param {string} error message to be rendered to the user in the case of failed request.
 */
export const sendAuthData = async (url, data, error) => {
  try {
    const initObj = {
      method: "POST",
      body: JSON.stringify({
        email: data.emailContent,
        password: data.passwordContent,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, initObj);
    if (!response.ok) {
      throw new Error(error);
    }
  } catch (err) {
    throw err;
  }
};
/**
 * Sends a POST request to the respective url - sends the registration data.
 * @param {string} url to which the function is sending a request.
 * @param {object} data contains all of the necessary details from the registration form.
 */
export const sendRegistrationData = async (url, data) => {
  try {
    const initObj = {
      method: "POST",
      body: JSON.stringify({
        email: data.emailContent,
        phone: data.phoneContent,
        address: data.addressContent,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, initObj);
    if (!response.ok) {
      throw new Error(
        "Something went wrong with the request! No data has been sent! Please, try again later!"
      );
    }
  } catch (err) {
    throw err;
  }
};
/**
 * Makes a GET request to some url.
 * @param {string} url to which the function is sending a request.
 * @returns {object[]} of all the users registration data.
 */
export const getUsers = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        "Something went wrong with the request! You have not been logged, try again later!"
      );
    }
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
};
/**
 * Takes the initial array of product objects and returns another containing the necessary information.
 * @param {object[]} arrOfProducts the initial array of products.
 * @returns {object[]} an array of products with the correct data.
 */
export const returnProductObjects = (arrOfProducts) => {
  return arrOfProducts.map((product) => {
    return {
      category: product.category,
      name: product.name,
      price: product.price,
      weight: product.weight,
      imgSrc: `${images[product.imgIdentifier]}`,
      id: product.productId,
    };
  });
};
/**
 * Depending on the hash parameter shows a page and hides the other pages.
 * @param {string} hash of the correct page.
 */
export const toggleCorrectPage = (hash) => {
  const pages = [...document.querySelectorAll(`[id$="page"]`)];
  pages.forEach((page) => {
    page.classList.add("hidden");
  });
  const currentPage = document.getElementById(hash);
  currentPage.classList.remove("hidden");
};
/**
 * Sends a POST request - contains the information regarding submitted order.
 * @param {string} url to which the function is sending a request.
 * @param {object} orderObj the data object containing all of the information regarding the successful order.
 */
export const sendOrderData = async (url, orderObj) => {
  try {
    const cart = JSON.parse(localStorage.getItem("doner-cart"));
    const totalAmount = cart
      .reduce((acc, product) => {
        return (acc += Number(product.price));
      }, 0)
      .toFixed(2);
    const cartStr = JSON.stringify(cart);
    const initObj = {
      method: "POST",
      body: JSON.stringify({
        date: `${new Date().getDate()}/${
          new Date().getMonth() + 1
        }/${new Date().getFullYear()} ${new Date().getHours()}:${
          new Date().getMinutes() < 10
            ? `0${new Date().getMinutes()}`
            : new Date().getMinutes()
        }`,
        cart: cartStr,
        totalAmount,
        name: orderObj.nameContent,
        email: orderObj.emailContent,
        phone: orderObj.phoneContent,
        address: orderObj.addressContent,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, initObj);
    if (!response.ok) {
      throw new Error(
        "Something went wrong with the request! No data has been sent! Please, try again later!"
      );
    }
  } catch (err) {
    throw err;
  }
};

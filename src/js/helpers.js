import { async } from "regenerator-runtime";
import "regenerator-runtime/runtime";
import * as images from "../img/products_imgs/*.png";
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
export const toggleCorrectPage = (hash) => {
  const pages = [...document.querySelectorAll(`[id$="page"]`)];
  pages.forEach((page) => {
    page.classList.add("hidden");
  });
  const currentPage = document.getElementById(hash);
  currentPage.classList.remove("hidden");
};
export const sendOrderData = async (url) => {
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
        }/${new Date().getFullYear()}`,
        cart: cartStr,
        totalAmount,
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

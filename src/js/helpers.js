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
export const sendRegistrationAuthData = async (url, data) => {
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
      throw new Error(
        "Please, check if the email has been used already for registration in the site or try again later!"
      );
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
        orderHistory: [],
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

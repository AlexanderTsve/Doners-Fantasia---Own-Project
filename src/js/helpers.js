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

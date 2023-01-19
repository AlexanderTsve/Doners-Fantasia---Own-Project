import { async } from "regenerator-runtime";
import "regenerator-runtime/runtime";
import { GET_URL } from "./config.js";
import * as images from "../img/products_imgs/*.png";

export const makeApiCall = async () => {
  const response = await fetch(GET_URL);
  if (!response.ok) {
    throw new Error(
      `There is something wrong with the request! Request status: ${response.status}`
    );
  }
  const data = await response.json();
  return data;
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

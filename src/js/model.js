import * as images from "../img/products_imgs/*.png";
import { makeApiCall } from "./helpers.js";
export const state = {
  productDetails: {},
  products: [],
};

export const loadProductDetails = async (productId) => {
  try {
    const data = await makeApiCall();
    state.productDetails = Object.values(data)[0].find(
      (product) => product.productId === productId
    );
  } catch (err) {
    alert(err);
  }
};

export const loadProducts = async () => {
  const data = await makeApiCall();
  state.products = Object.values(data)[0].map((product) => {
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

import { async } from "regenerator-runtime";
import "regenerator-runtime/runtime";
import { GET_URL } from "./config.js";

export const makeApiCall = async () => {
  const response = await fetch(GET_URL);
  if (!response.ok) {
    throw new Error(`Something went wrong! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

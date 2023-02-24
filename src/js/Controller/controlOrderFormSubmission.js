import { async } from "regenerator-runtime";
import { checkLocalStorage } from "../Model/checkLocalStorage.js";
import { submitOrderForm } from "../Model/submitOrderForm.js";
import cartPageView from "../Views/cartPageView.js";
import { renderCartData } from "./controlCartProducts.js";
export const controlOrderFormSubmission = async () => {
  let response;
  try {
    await submitOrderForm();
    response = "Your order has been successful! Thank you!";
  } catch (err) {
    response = err.message;
  } finally {
    cartPageView.showMessageModal(response, "order-form-modal");
    await checkLocalStorage();
    renderCartData();
  }
};

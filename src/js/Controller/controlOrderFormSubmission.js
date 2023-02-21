import { async } from "regenerator-runtime";
import { submitOrderForm } from "../Model/submitOrderForm.js";
import cartPageView from "../Views/cartPageView.js";
export const controlOrderFormSubmission = () => {
  cartPageView.addSubmitFormHandler(submitOrderForm);
};

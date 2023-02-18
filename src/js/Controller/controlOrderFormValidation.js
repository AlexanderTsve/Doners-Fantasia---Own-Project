import * as validateOrderInputs from "../Model/validateOrderInputs.js";
import cartPageView from "../Views/cartPageView.js";
export const controlNamesValidation = (nameStr) => {
  try {
    validateOrderInputs.validateOrderFormNames(nameStr);
    cartPageView.clearErrorParaHandler("names");
  } catch (err) {
    cartPageView.errorParaHandler("names", err.message);
  }
};
export const controlAddressValidation = (addressStr) => {
  try {
    validateOrderInputs.validateOrderFormAddress(addressStr);
    cartPageView.clearErrorParaHandler("address");
  } catch (err) {
    cartPageView.errorParaHandler("address", err.message);
  }
};
export const controlPhoneValidation = (phoneStr) => {
  try {
    validateOrderInputs.validateOrderFormPhone(phoneStr);
    cartPageView.clearErrorParaHandler("phone");
  } catch (err) {
    cartPageView.errorParaHandler("phone", err.message);
  }
};
export const controlEmailValidation = (emailStr) => {
  try {
    validateOrderInputs.validateOrderFormEmail(emailStr);
    cartPageView.clearErrorParaHandler("email");
  } catch (err) {
    cartPageView.errorParaHandler("email", err.message);
  }
};

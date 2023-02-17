import * as validateOrderInputs from "../Model/validateOrderInputs.js";
import cartPageView from "../Views/cartPageView.js";
export const controlNamesValidation = (nameStr) => {
  try {
    validateOrderInputs.validateOrderFormNames(nameStr);
  } catch (err) {
    cartPageView.errorParaHandler("names", err.message);
  }
};
export const controlAddressValidation = (addressStr) => {
  try {
    validateOrderInputs.validateOrderFormAddress(addressStr);
  } catch (err) {
    cartPageView.errorParaHandler("address", err.message);
  }
};
export const controlPhoneValidation = (phoneStr) => {
  try {
    validateOrderInputs.validateOrderFormPhone(phoneStr);
  } catch (err) {
    cartPageView.errorParaHandler("phone", err.message);
  }
};
export const controlEmailValidation = (emailStr) => {
  try {
    validateOrderInputs.validateOrderFormEmail(emailStr);
  } catch (err) {
    cartPageView.errorParaHandler("email", err.message);
  }
};

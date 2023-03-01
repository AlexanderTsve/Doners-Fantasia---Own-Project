import * as validateOrderInputs from "../Model/validateOrderInputs.js";
import { state } from "../Model/state.js";
import cartPageView from "../Views/cartPageView.js";
/**
 * Check if the order form input data is correct.
 */
const validateOrderForm = () => {
  state.orderDataIsOk =
    state.orderData.addressContentIsOk &&
    state.orderData.emailContentIsOk &&
    state.orderData.nameContentIsOk &&
    state.orderData.phoneContentIsOk;
};
/**
 * Controls if the order form name input is correct.
 * @param {string} nameStr The name input to be checked.
 */
export const controlNamesValidation = (nameStr) => {
  try {
    validateOrderInputs.validateOrderFormNames(nameStr);
    cartPageView.clearErrorParaHandler("names");
  } catch (err) {
    cartPageView.errorParaHandler("names", err.message);
  } finally {
    validateOrderForm();
  }
};
/**
 * Controls if the order form address input is correct.
 * @param {string} addressStr The address input to be checked.
 */
export const controlAddressValidation = (addressStr) => {
  try {
    validateOrderInputs.validateOrderFormAddress(addressStr);
    cartPageView.clearErrorParaHandler("address");
  } catch (err) {
    cartPageView.errorParaHandler("address", err.message);
  } finally {
    validateOrderForm();
  }
};
/**
 * Controls if the order form phone input is correct.
 * @param {string} phoneStr The phone input to be checked.
 */
export const controlPhoneValidation = (phoneStr) => {
  try {
    validateOrderInputs.validateOrderFormPhone(phoneStr);
    cartPageView.clearErrorParaHandler("phone");
  } catch (err) {
    cartPageView.errorParaHandler("phone", err.message);
  } finally {
    validateOrderForm();
  }
};
/**
 * Controls if the order form email input is correct.
 * @param {string} emailStr The email input to be checked.
 */
export const controlEmailValidation = (emailStr) => {
  try {
    validateOrderInputs.validateOrderFormEmail(emailStr);
    cartPageView.clearErrorParaHandler("email");
  } catch (err) {
    cartPageView.errorParaHandler("email", err.message);
  } finally {
    validateOrderForm();
  }
};

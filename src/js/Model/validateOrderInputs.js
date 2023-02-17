import { state } from "./state.js";
import { REGEX_EMAIL } from "../config.js";
import { REGEX_PHONE } from "../config.js";
import { REGEX_NAME } from "../config.js";
export const validateOrderFormNames = (nameStr) => {
  try {
    const regName = REGEX_NAME;
    if (!regName.test(nameStr) || !nameStr) {
      throw new Error("Fill in valid names!");
    }
    state.orderData.nameContent = nameStr;
    state.orderData.nameContentIsOk = true;
  } catch (err) {
    throw err;
  }
};
export const validateOrderFormAddress = (addressStr) => {
  try {
    state.orderData.addressContentIsOk =
      addressStr.length < 20 || !addressStr ? false : true;
    if (!state.orderData.addressContentIsOk) {
      throw new Error("Fill in valid address!");
    }
    state.orderData.addressContent = addressStr;
  } catch (err) {
    throw err;
  }
};
export const validateOrderFormPhone = (phoneStr) => {
  try {
    const regPhone = REGEX_PHONE;
    if (!regPhone.test(phoneStr) || !phoneStr) {
      throw new Error("Fill in valid phone number!");
    }
    state.orderData.phoneContent = phoneStr;
    state.orderData.phoneContentIsOk = true;
  } catch (err) {
    throw err;
  }
};
export const validateOrderFormEmail = (emailStr) => {
  try {
    const regEmail = REGEX_EMAIL;
    if (!regEmail.test(emailStr) || !emailStr) {
      throw new Error("Fill in valid email address!");
    }
    state.orderData.emailContent = emailStr;
    state.orderData.emailContentIsOk = true;
  } catch (err) {
    throw err;
  }
};
export const validateOrderForm = () => {
  state.orderDataIsOk =
    state.orderData.addressContentIsOk &&
    state.orderData.emailContentIsOk &&
    state.orderData.nameContentIsOk &&
    state.orderData.phoneContentIsOk;
};

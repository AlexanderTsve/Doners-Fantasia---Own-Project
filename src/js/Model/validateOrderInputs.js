import { state } from "./state.js";
import {
  REGEX_EMAIL,
  REGEX_PHONE,
  REGEX_NAME,
  FILL_IN_VALID_NAMES,
  FILL_IN_VALID_ADDRESS,
  FILL_IN_VALID_PHONE_MSG,
  FILL_IN_VALID_EMAIL_MSG,
} from "../config.js";
export const validateOrderFormNames = (nameStr) => {
  try {
    if (nameStr.length === 0) {
      state.orderData.nameContentIsOk = false;
      return;
    }
    const regName = REGEX_NAME;
    if (!regName.test(nameStr) || !nameStr) {
      state.orderData.nameContent = "";
      state.orderData.nameContentIsOk = false;
      throw new Error(FILL_IN_VALID_NAMES);
    }
    state.orderData.nameContent = nameStr;
    state.orderData.nameContentIsOk = true;
  } catch (err) {
    throw err;
  }
};
export const validateOrderFormAddress = (addressStr) => {
  try {
    if (addressStr.length === 0) {
      state.orderData.addressContentIsOk = false;
      return;
    }
    state.orderData.addressContentIsOk =
      addressStr.length < 20 || !addressStr ? false : true;
    if (!state.orderData.addressContentIsOk) {
      state.orderData.addressContent = "";
      throw new Error(FILL_IN_VALID_ADDRESS);
    }
    state.orderData.addressContent = addressStr;
  } catch (err) {
    throw err;
  }
};
export const validateOrderFormPhone = (phoneStr) => {
  try {
    if (phoneStr.length === 0) {
      state.orderData.phoneContentIsOk = false;
      return;
    }
    const regPhone = REGEX_PHONE;
    if (!regPhone.test(phoneStr) || !phoneStr) {
      state.orderData.phoneContent = "";
      state.orderData.phoneContentIsOk = false;
      throw new Error(FILL_IN_VALID_PHONE_MSG);
    }
    state.orderData.phoneContent = phoneStr;
    state.orderData.phoneContentIsOk = true;
  } catch (err) {
    throw err;
  }
};
export const validateOrderFormEmail = (emailStr) => {
  try {
    if (emailStr.length === 0) {
      state.orderData.emailContentIsOk = false;
      return;
    }
    const regEmail = REGEX_EMAIL;
    if (!regEmail.test(emailStr) || !emailStr) {
      state.orderData.emailContent = "";
      state.orderData.emailContentIsOk = false;
      throw new Error(FILL_IN_VALID_EMAIL_MSG);
    }
    state.orderData.emailContent = emailStr;
    state.orderData.emailContentIsOk = true;
  } catch (err) {
    throw err;
  }
};

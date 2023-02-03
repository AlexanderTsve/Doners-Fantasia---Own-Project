import { state } from "./state.js";
import { REGEX_PHONE } from "../config.js";
export const validateRegistrationPhone = (dataObj) => {
  const { phoneContent } = dataObj;
  state.registrationFormData.phoneContent = phoneContent;
  const regPhone = REGEX_PHONE;
  state.registrationFormData.phoneContentIsOk =
    !regPhone.test(phoneContent) || !phoneContent ? false : true;
};

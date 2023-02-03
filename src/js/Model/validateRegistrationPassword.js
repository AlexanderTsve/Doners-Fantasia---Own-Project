import { state } from "./state.js";
import { REGEX_PASSWORD } from "../config.js";
export const validateRegistrationPassword = (dataObj) => {
  const { passwordContent } = dataObj;
  state.registrationFormData.passwordContent = passwordContent;
  const regPassword = REGEX_PASSWORD;
  state.registrationFormData.passwordContentIsOk =
    !regPassword.test(passwordContent) || !passwordContent ? false : true;
};

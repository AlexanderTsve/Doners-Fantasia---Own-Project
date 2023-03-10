import { state } from "./state.js";
import { REGEX_EMAIL, REGEX_PASSWORD } from "../config.js";
/**
 * Validates the whole form content.
 * @param {object} dataObj from which we take the data to be validated.
 */
export const validateLoginForm = (dataObj) => {
  const { emailContent } = dataObj;
  const { passwordContent } = dataObj;
  state.loginFormData.emailContent = emailContent;
  state.loginFormData.passwordContent = passwordContent;
  const regEmail = REGEX_EMAIL;
  const regPassword = REGEX_PASSWORD;
  state.loginFormDataIsOk =
    emailContent.length > 0 &&
    passwordContent.length > 0 &&
    regEmail.test(emailContent) &&
    regPassword.test(passwordContent)
      ? true
      : false;
};

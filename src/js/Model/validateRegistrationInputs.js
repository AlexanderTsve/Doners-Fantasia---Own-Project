import { state } from "./state.js";
import { REGEX_EMAIL } from "../config.js";
import { REGEX_PASSWORD } from "../config.js";
import { REGEX_PHONE } from "../config.js";
/**
 * Validates the registration email input.
 * @param {object} dataObj from which we take the email input.
 */
export const validateRegistrationEmail = (dataObj) => {
  const { emailContent } = dataObj;
  state.registrationFormData.emailContent = emailContent;
  const regEmail = REGEX_EMAIL;
  state.registrationFormData.emailContentIsOk =
    !regEmail.test(emailContent) || !emailContent ? false : true;
};
/**
 * Validates the registration password input.
 * @param {object} dataObj from which we take the password input.
 */
export const validateRegistrationPassword = (dataObj) => {
  const { passwordContent } = dataObj;
  state.registrationFormData.passwordContent = passwordContent;
  const regPassword = REGEX_PASSWORD;
  state.registrationFormData.passwordContentIsOk =
    !regPassword.test(passwordContent) || !passwordContent ? false : true;
};
/**
 * Validates the registration confirmation password input.
 * @param {object} dataObj from which we take the confirmation password input.
 */
export const validateRegistrationConfirmPassword = (dataObj) => {
  const { passwordConfirmContent } = dataObj;
  state.registrationFormData.confirmPasswordContent = passwordConfirmContent;
  state.registrationFormData.confirmPasswordContentIsOk =
    state.registrationFormData.passwordContent !== passwordConfirmContent ||
    !passwordConfirmContent
      ? false
      : true;
};
/**
 * Validates the registration phone input.
 * @param {object} dataObj from which we take the phone input.
 */
export const validateRegistrationPhone = (dataObj) => {
  const { phoneContent } = dataObj;
  state.registrationFormData.phoneContent = phoneContent;
  const regPhone = REGEX_PHONE;
  state.registrationFormData.phoneContentIsOk =
    !regPhone.test(phoneContent) || !phoneContent ? false : true;
};
/**
 * Validates the registration address input.
 * @param {object} dataObj from which we take the address input.
 */
export const validateRegistrationAddress = (dataObj) => {
  const { addressContent } = dataObj;
  state.registrationFormData.addressContent = addressContent;
  state.registrationFormData.addressContentIsOk =
    addressContent.length < 20 ? false : true;
};
/**
 * Validates the whole registration form.
 * @returns {boolean} whether all of the inputs are correct or not.
 */
export const validateRegistrationForm = () => {
  return (
    state.registrationFormData.addressContentIsOk &&
    state.registrationFormData.confirmPasswordContentIsOk &&
    state.registrationFormData.emailContentIsOk &&
    state.registrationFormData.passwordContentIsOk &&
    state.registrationFormData.phoneContentIsOk
  );
};

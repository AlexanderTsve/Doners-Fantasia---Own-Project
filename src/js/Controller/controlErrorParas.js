import { state } from "../Model/state.js";
import * as validateRegistration from "../Model/validateRegistrationInputs.js";
import registrationView from "../Views/registrationView.js";
/**
 * Disables or enables the registration button, removes or adds the description tooltip.
 */
const disableHandler = () => {
  registrationView.disabledHandler(
    validateRegistration.validateRegistrationForm()
  );
};
/**
 * Gets and validates the user inputs in the registration form.
 * @callback validationFn A callback function which should validate the user inputs.
 */
const getAndValidateInputs = (validationFn) => {
  registrationView.getRegistrationFormInputs(validationFn);
};
/**
 * Shows or hides the respective error paragraph in the registration form.
 * @param {boolean} booleanValue It shows whether the respective error paragraph should be rendered to or removed from the DOM.
 * @param {String} para It shows which error paragraph should be removed or rendered.
 */
const togglePara = (booleanValue, para) => {
  booleanValue
    ? registrationView.hidePara(para)
    : registrationView.showPara(para);
};
/**
 * Controls rendering/removing the address error paragraph.
 */
export const controlRegisterErrorParaAddress = () => {
  getAndValidateInputs(validateRegistration.validateRegistrationAddress);
  const booleanValue =
    state.registrationFormData.addressContentIsOk ||
    !state.registrationFormData.addressContent;
  togglePara(booleanValue, "address");
  disableHandler();
};
/**
 * Controls rendering/removing the password error paragraph.
 */
export const controlRegisterErrorParaPassword = () => {
  getAndValidateInputs(validateRegistration.validateRegistrationPassword);
  const booleanValue =
    state.registrationFormData.passwordContentIsOk ||
    !state.registrationFormData.passwordContent;
  togglePara(booleanValue, "password");
  disableHandler();
};
/**
 * Controls rendering/removing the confirmed password error paragraph.
 */
export const controlRegisterErrorParaConfirmPassword = () => {
  getAndValidateInputs(
    validateRegistration.validateRegistrationConfirmPassword
  );
  const booleanValue =
    state.registrationFormData.confirmPasswordContentIsOk ||
    (!state.registrationFormData.passwordContent &&
      !state.registrationFormData.confirmPasswordContent);
  togglePara(booleanValue, "password_confirm");
  disableHandler();
};
/**
 * Controls rendering/removing the email error paragraph.
 */
export const controlRegisterErrorParaEmail = () => {
  getAndValidateInputs(validateRegistration.validateRegistrationEmail);
  const booleanValue =
    state.registrationFormData.emailContentIsOk ||
    !state.registrationFormData.emailContent;
  togglePara(booleanValue, "email");
  disableHandler();
};
/**
 * Controls rendering/removing the phone error paragraph.
 */
export const controlRegisterErrorParaPhone = () => {
  getAndValidateInputs(validateRegistration.validateRegistrationPhone);
  const booleanValue =
    state.registrationFormData.phoneContentIsOk ||
    !state.registrationFormData.phoneContent;
  togglePara(booleanValue, "phone");
  disableHandler();
};

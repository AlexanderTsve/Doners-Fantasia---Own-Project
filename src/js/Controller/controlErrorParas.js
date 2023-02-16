import * as bootstrap from "bootstrap";
import { state } from "../Model/state.js";
import * as validateRegistration from "../Model/validateRegistrationInputs.js";
import registrationView from "../Views/registrationView.js";
const disableHandler = () => {
  registrationView.disabledHandler(
    validateRegistration.validateRegistrationForm()
  );
};
const getAndValidateInputs = (validationFn) => {
  registrationView.getRegistrationFormInputs(validationFn);
};
const togglePara = (booleanValue, para) => {
  booleanValue
    ? registrationView.hidePara(para)
    : registrationView.showPara(para);
};
export const controlRegisterErrorParaAddress = () => {
  getAndValidateInputs(validateRegistration.validateRegistrationAddress);
  const booleanValue =
    state.registrationFormData.addressContentIsOk ||
    !state.registrationFormData.addressContent;
  togglePara(booleanValue, "address");
  disableHandler();
};
export const controlRegisterErrorParaPassword = () => {
  getAndValidateInputs(validateRegistration.validateRegistrationPassword);
  const booleanValue =
    state.registrationFormData.passwordContentIsOk ||
    !state.registrationFormData.passwordContent;
  togglePara(booleanValue, "password");
  disableHandler();
};
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
export const controlRegisterErrorParaEmail = () => {
  getAndValidateInputs(validateRegistration.validateRegistrationEmail);
  const booleanValue =
    state.registrationFormData.emailContentIsOk ||
    !state.registrationFormData.emailContent;
  togglePara(booleanValue, "email");
  disableHandler();
};
export const controlRegisterErrorParaPhone = () => {
  getAndValidateInputs(validateRegistration.validateRegistrationPhone);
  const booleanValue =
    state.registrationFormData.phoneContentIsOk ||
    !state.registrationFormData.phoneContent;
  togglePara(booleanValue, "phone");
  disableHandler();
};

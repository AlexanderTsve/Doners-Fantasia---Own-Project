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
const togglePara = (booleanValue) => {
  booleanValue
    ? registrationView.hidePara("address")
    : registrationView.showPara("address");
};
export const controlRegisterErrorParaAddress = () => {
  getAndValidateInputs(validateRegistration.validateRegistrationAddress);
  const booleanValue =
    state.registrationFormData.addressContentIsOk ||
    !state.registrationFormData.addressContent;
  togglePara(booleanValue);
  disableHandler();
};
export const controlRegisterErrorParaPassword = () => {
  getAndValidateInputs(validateRegistration.validateRegistrationPassword);
  const booleanValue =
    state.registrationFormData.passwordContentIsOk ||
    !state.registrationFormData.passwordContent;
  togglePara(booleanValue);
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
  togglePara(booleanValue);
  disableHandler();
};
export const controlRegisterErrorParaEmail = () => {
  getAndValidateInputs(validateRegistration.validateRegistrationEmail);
  const booleanValue =
    state.registrationFormData.emailContentIsOk ||
    !state.registrationFormData.emailContent;
  togglePara(booleanValue);
  disableHandler();
};
export const controlRegisterErrorParaPhone = () => {
  getAndValidateInputs(validateRegistration.validateRegistrationPhone);
  const booleanValue =
    state.registrationFormData.phoneContentIsOk ||
    !state.registrationFormData.phoneContent;
  togglePara(booleanValue);
  disableHandler();
};

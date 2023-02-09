import * as bootstrap from "bootstrap";
import { state } from "../Model/state.js";
import * as validateRegistration from "../Model/validateRegistrationInputs.js";
import registrationView from "../Views/registrationView.js";
export const controlRegisterErrorParaPassword = () => {
  registrationView.getRegistrationFormInputs(
    validateRegistration.validateRegistrationPassword
  );
  state.registrationFormData.passwordContentIsOk ||
  !state.registrationFormData.passwordContent
    ? registrationView.hidePara("password")
    : registrationView.showPara("password");
  registrationView.disabledHandler(
    validateRegistration.validateRegistrationForm()
  );
};

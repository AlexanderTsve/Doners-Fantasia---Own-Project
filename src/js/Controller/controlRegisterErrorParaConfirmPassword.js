import * as bootstrap from "bootstrap";
import { state } from "../Model/state.js";
import * as validateRegistration from "../Model/validateRegistrationInputs.js";
import registrationView from "../Views/registrationView.js";
export const controlRegisterErrorParaConfirmPassword = () => {
  registrationView.getRegistrationFormInputs(
    validateRegistration.validateRegistrationConfirmPassword
  );
  state.registrationFormData.confirmPasswordContentIsOk ||
  (!state.registrationFormData.passwordContent &&
    !state.registrationFormData.confirmPasswordContent)
    ? registrationView.hidePara("password_confirm")
    : registrationView.showPara("password_confirm");
  registrationView.disabledHandler(
    validateRegistration.validateRegistrationForm()
  );
};

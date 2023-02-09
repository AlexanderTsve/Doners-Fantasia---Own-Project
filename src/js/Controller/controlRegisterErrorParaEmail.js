import * as bootstrap from "bootstrap";
import { state } from "../Model/state.js";
import * as validateRegistration from "../Model/validateRegistrationInputs.js";
import registrationView from "../Views/registrationView.js";

export const controlRegisterErrorParaEmail = () => {
  registrationView.getRegistrationFormInputs(
    validateRegistration.validateRegistrationEmail
  );
  state.registrationFormData.emailContentIsOk ||
  !state.registrationFormData.emailContent
    ? registrationView.hidePara("email")
    : registrationView.showPara("email");
  registrationView.disabledHandler(
    validateRegistration.validateRegistrationForm()
  );
};

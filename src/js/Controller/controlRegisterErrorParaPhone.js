import * as bootstrap from "bootstrap";
import { state } from "../Model/state.js";
import * as validateRegistration from "../Model/validateRegistrationInputs.js";
import registrationView from "../Views/registrationView.js";
export const controlRegisterErrorParaPhone = () => {
  registrationView.getRegistrationFormInputs(
    validateRegistration.validateRegistrationPhone
  );
  state.registrationFormData.phoneContentIsOk ||
  !state.registrationFormData.phoneContent
    ? registrationView.hidePara("phone")
    : registrationView.showPara("phone");
  registrationView.disabledHandler(
    validateRegistration.validateRegistrationForm()
  );
};

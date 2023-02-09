import * as bootstrap from "bootstrap";
import { state } from "../Model/state.js";
import * as validateRegistration from "../Model/validateRegistrationInputs.js";
import registrationView from "../Views/registrationView.js";
export const controlRegisterErrorParaAddress = () => {
  registrationView.getRegistrationFormInputs(
    validateRegistration.validateRegistrationAddress
  );
  state.registrationFormData.addressContentIsOk ||
  !state.registrationFormData.addressContent
    ? registrationView.hidePara("address")
    : registrationView.showPara("address");
  registrationView.disabledHandler(
    validateRegistration.validateRegistrationForm()
  );
};

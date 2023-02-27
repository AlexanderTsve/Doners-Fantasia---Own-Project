import * as bootstrap from "bootstrap";
import { async } from "regenerator-runtime";
import "regenerator-runtime/runtime";
import { clearRegistrationState } from "../Model/clearRegistrationState.js";
import { submitRegistrationForm } from "../Model/submitRegistrationForm.js";
import * as validateRegistration from "../Model/validateRegistrationInputs.js";
import registrationView from "../Views/registrationView.js";
export const controlRegistrationFormSubmission = async () => {
  const response = await submitRegistrationForm();
  registrationView.hideMainModal("registration");
  registrationView.clearInputs();
  registrationView.showMessageModal(response, "modal_reg");
  clearRegistrationState();
  registrationView.clearParas();
  registrationView.disabledHandler(
    validateRegistration.validateRegistrationForm()
  );
};

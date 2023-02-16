import * as bootstrap from "bootstrap";
import registrationView from "../Views/registrationView.js";
import { clearRegistrationState } from "../Model/clearRegistrationState.js";
export const registerModalHiding = () => {
  registrationView.hideMainModal("registration");
  registrationView.clearInputs();
  clearRegistrationState();
  registrationView.clearParas();
};
export const registerModalShowing = () => {
  registrationView.showMainModal("registration");
};

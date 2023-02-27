import { clearRegistrationState } from "../Model/clearRegistrationState.js";
import registrationView from "../Views/registrationView.js";
/**
 * Controls hiding the registration modal.
 */
export const registerModalHiding = () => {
  registrationView.hideMainModal("registration");
  registrationView.clearInputs();
  clearRegistrationState();
  registrationView.clearParas();
};
/**
 * Controls showing the registration modal.
 */
export const registerModalShowing = () => {
  registrationView.showMainModal("registration");
};

import { clearRegistrationState } from "../Model/clearRegistrationState.js";
import registrationView from "../Views/registrationView.js";
import loginView from "../Views/loginView.js";
/**
 * Allows the user to navigate from the registration modal to login modal.
 */
export const controlClickLoginParaRegForm = () => {
  registrationView.hideMainModal("registration");
  registrationView.clearInputs();
  loginView.showMainModal("login");
  clearRegistrationState();
  registrationView.clearParas();
};

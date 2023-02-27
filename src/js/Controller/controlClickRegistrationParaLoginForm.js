import { clearLoginFormState } from "../Model/clearLoginFormState.js";
import loginView from "../Views/loginView.js";
import registrationView from "../Views/registrationView.js";
/**
 * Allows the user to navigate from the login modal to registration modal.
 */
export const controlClickRegistrationParaLoginForm = () => {
  loginView.hideMainModal("login");
  loginView.clearInputs();
  registrationView.showMainModal("registration");
  clearLoginFormState();
};

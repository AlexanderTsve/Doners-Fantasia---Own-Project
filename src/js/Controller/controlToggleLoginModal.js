import { clearLoginFormState } from "../Model/clearLoginFormState.js";
import loginView from "../Views/loginView.js";
/**
 * Controls the hiding of the login modal.
 */
export const hideLoginModal = () => {
  loginView.hideMainModal("login");
  loginView.clearInputs();
  clearLoginFormState();
};
/**
 * Controls the showing of the login modal.
 */
export const showLoginModal = () => {
  loginView.showMainModal("login");
};

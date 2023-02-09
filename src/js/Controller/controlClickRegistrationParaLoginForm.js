import * as bootstrap from "bootstrap";
import loginView from "../Views/loginView.js";
import registrationView from "../Views/registrationView.js";
import { clearLoginFormState } from "../Model/clearLoginFormState.js";
export const controlClickRegistrationParaLoginForm = () => {
  loginView.hideMainModal("login");
  loginView.clearInputs();
  registrationView.showMainModal("registration");
  clearLoginFormState();
};

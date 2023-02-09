import * as bootstrap from "bootstrap";
import registrationView from "../Views/registrationView.js";
import loginView from "../Views/loginView.js";
import { clearRegistrationState } from "../Model/clearRegistrationState.js";
export const controlClickLoginParaRegForm = () => {
  registrationView.hideMainModal("registration");
  registrationView.clearInputs();
  loginView.showMainModal("login");
  clearRegistrationState();
  registrationView.clearParas();
};

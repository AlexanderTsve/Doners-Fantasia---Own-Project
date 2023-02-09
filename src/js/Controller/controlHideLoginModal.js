import * as bootstrap from "bootstrap";
import loginView from "../Views/loginView.js";
import { clearLoginFormState } from "../Model/clearLoginFormState.js";
export const controlHideLoginModal = () => {
  loginView.hideMainModal("login");
  loginView.clearInputs();
  clearLoginFormState();
};

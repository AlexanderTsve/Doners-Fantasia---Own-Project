import * as bootstrap from "bootstrap";
import { async } from "regenerator-runtime";
import "regenerator-runtime/runtime";
import { state } from "../Model/state.js";
import { submitLoginForm } from "../Model/submitLoginForm.js";
import { clearLoginFormState } from "../Model/clearLoginFormState.js";
import navigationView from "../Views/navigationView.js";
import loginView from "../Views/loginView.js";
export const controlLoginSubmission = async () => {
  try {
    if (!state.loginFormDataIsOk) {
      throw new Error("Please, fill in all of the fields with correct data!");
    }
    await submitLoginForm();
    navigationView.toggleHideShowNavigationBtn(state.isLogged);
    loginView.changeWelcomePara(state.isLogged, state.loggedUser.email);
  } catch (err) {
    loginView.showMessageModal(err.message, "modal_log_error");
  } finally {
    loginView.hideMainModal("login");
    loginView.clearInputs();
    clearLoginFormState();
    loginView.showLoginErrorPara();
  }
};

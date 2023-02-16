import * as bootstrap from "bootstrap";
import { async } from "regenerator-runtime";
import "regenerator-runtime/runtime";
import { state } from "../Model/state.js";
import { submitLoginForm } from "../Model/submitLoginForm.js";
import { clearLoginFormState } from "../Model/clearLoginFormState.js";
import navigationView from "../Views/navigationView.js";
import loginView from "../Views/loginView.js";
import { controlIfUserIsRemembered } from "./controlIfUserIsRemembered.js";
export const controlLoginSubmission = async () => {
  try {
    if (!state.loginFormDataIsOk) {
      throw new Error("Please, fill in all of the fields with correct data!");
    }
    loginView.addRememberMeHandler(controlIfUserIsRemembered);
    await submitLoginForm();
    const loggedUser = JSON.parse(
      localStorage.getItem("donerFantasiaLoggedUser")
    );
    navigationView.toggleHideShowNavigationBtn(loggedUser);
    loginView.changeWelcomePara(loggedUser, loggedUser.email);
  } catch (err) {
    loginView.showMessageModal(err.message, "modal_log_error");
  } finally {
    loginView.hideMainModal("login");
    loginView.clearInputs();
    clearLoginFormState();
    loginView.showLoginErrorPara();
  }
};
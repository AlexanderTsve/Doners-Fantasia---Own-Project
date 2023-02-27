import { async } from "regenerator-runtime";
import "regenerator-runtime/runtime";
import { state } from "../Model/state.js";
import { submitLoginForm } from "../Model/submitLoginForm.js";
import { clearLoginFormState } from "../Model/clearLoginFormState.js";
import { checkLoginAndOrderFormData } from "../Model/checkLoginAndOrderFormData.js";
import navigationView from "../Views/navigationView.js";
import loginView from "../Views/loginView.js";
import cartPageView from "../Views/cartPageView.js";
import orderHistoryView from "../Views/orderHistoryView.js";
import { controlIfUserIsRemembered } from "./controlIfUserIsRemembered.js";
import { LOGIN_INPUT_DATA_ERROR_MSG } from "../config.js";
/**
 * Controls the login submission and data clearing afterwards.
 */
export const controlLoginSubmission = async () => {
  try {
    if (!state.loginFormDataIsOk) {
      throw new Error(LOGIN_INPUT_DATA_ERROR_MSG);
    }
    await submitLoginForm();
    loginView.addRememberMeHandler(controlIfUserIsRemembered);
    const loggedUser = state.loggedUser;
    navigationView.toggleHideShowNavigationBtn(loggedUser);
    loginView.changeWelcomePara(loggedUser, loggedUser.email);
    orderHistoryView.render(loggedUser);
  } catch (err) {
    loginView.showMessageModal(err.message, "modal_log_error");
  } finally {
    loginView.hideMainModal("login");
    loginView.clearInputs();
    clearLoginFormState();
    loginView.showLoginErrorPara();
    const bool = checkLoginAndOrderFormData();
    cartPageView.toggleOrderBtnDisabledAttr(bool);
  }
};

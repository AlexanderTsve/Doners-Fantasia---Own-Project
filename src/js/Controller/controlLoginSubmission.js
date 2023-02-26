import * as bootstrap from "bootstrap";
import { async } from "regenerator-runtime";
import "regenerator-runtime/runtime";
import { state } from "../Model/state.js";
import { submitLoginForm } from "../Model/submitLoginForm.js";
import { clearLoginFormState } from "../Model/clearLoginFormState.js";
import navigationView from "../Views/navigationView.js";
import loginView from "../Views/loginView.js";
import { controlIfUserIsRemembered } from "./controlIfUserIsRemembered.js";
import { checkLoginAndOrderFormData } from "../Model/checkLoginAndOrderFormData.js";
import cartPageView from "../Views/cartPageView.js";
import orderHistoryView from "../Views/orderHistoryView.js";
export const controlLoginSubmission = async () => {
  try {
    if (!state.loginFormDataIsOk) {
      throw new Error("Please, fill in all of the fields with correct data!");
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

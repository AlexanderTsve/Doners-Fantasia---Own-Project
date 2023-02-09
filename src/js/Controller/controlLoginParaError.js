import * as bootstrap from "bootstrap";
import { state } from "../Model/state.js";
import { validateLoginForm } from "../Model/validateLoginForm.js";
import loginView from "../Views/loginView.js";
export const controlLoginParaError = () => {
  loginView.getLoginFormInputs(validateLoginForm);
  if (!state.loginFormDataIsOk) {
    loginView.showLoginErrorPara();
    return;
  }
  loginView.hideLoginErrorPara();
};

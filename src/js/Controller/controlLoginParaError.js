import { state } from "../Model/state.js";
import { validateLoginForm } from "../Model/validateLoginForm.js";
import loginView from "../Views/loginView.js";
/**
 * Controls showing and hiding the login form error paragraph - depending on the inputs.
 * @returns If login data is not ok, the paragraph is shown and the function returns.
 */
export const controlLoginParaError = () => {
  loginView.getLoginFormInputs(validateLoginForm);
  if (!state.loginFormDataIsOk) {
    loginView.showLoginErrorPara();
    return;
  }
  loginView.hideLoginErrorPara();
};

import Views from "./Views.js";
/**
 * Checks the login inputs and attaches a handler to the login submission button.
 */
class LoginView extends Views {
  /**
   * Function that executes when the input (in either of the both fields) changes.
   * @callback loginInputHandler
   */
  /**
   * Listens for the 'input' events for both fields and attaches a handler.
   * @param {loginInputHandler} handler callback that handles the error paragraph above the login input fields.
   */
  addInputFieldsHandler(handler) {
    document
      .getElementById("login_email_input")
      .addEventListener("input", handler);
    document
      .getElementById("login_password_input")
      .addEventListener("input", handler);
  }
  /**
   * Executes when the form is submitted.
   * @callback checkRememberMe
   * @param {object} obj The object contains property indicating whether the checkbox 'remember me' has been checked by the user during logging in.
   */
  /**
   * Attaches a handler after the form submission which tracks whether the 'remember me' checkbox has been checked or not.
   * @param {checkRememberMe} handler to be executed with parameter object showing whether the checkbox has been checked.
   */
  addRememberMeHandler(handler) {
    const obj = {
      checked: document.getElementById("remember-me-checkbox").checked,
    };
    handler(obj);
  }
  /**
   * Executes when the login button is clicked and submit the form.
   * @callback loginSubmissionFn
   */
  /**
   * Listens for the "click" event and attaches a handler for the form submission.
   * @param {loginSubmissionFn} handler function for the form submission.
   */
  addLoginBtnHandler(handler) {
    document.querySelector(".login_btn").addEventListener("click", handler);
  }
  /**
   * Unchecks the 'remember me' checkbox.
   */
  clearRememberMe() {
    document.getElementById("remember-me-checkbox").checked = false;
  }
  /**
   * Clears the inputs in the login form.
   */
  clearInputs() {
    document.getElementById("login_email_input").value = "";
    document.getElementById("login_password_input").value = "";
  }
  /**
   * Shows the login error paragraph.
   */
  showLoginErrorPara() {
    document.querySelector(".para_login").classList.remove("not_visible");
  }
  /**
   * Hides the login error paragraph.
   */
  hideLoginErrorPara() {
    document.querySelector(".para_login").classList.add("not_visible");
  }
  /**
   * Changes the welcome paragraph depending whether there is logged in user or not.
   * @param {boolean} isLogged indicates whether there is a logged in user.
   * @param {null | string} name null or string depending on whether the user visits the website as a guest or is logged in.
   */
  changeWelcomePara(isLogged, name = null) {
    const divEl = document.querySelector(".welcome-para");
    divEl.firstChild.innerText =
      "Welcome, " + (isLogged ? `${name}!` : "guest!");
  }
  /**
   * Validates the login inputs.
   * @callback validateLoginInputs
   */
  /**
   * Gets the login inputs.
   * @param {validateLoginInputs} validationFn validates the login inputs.
   */
  getLoginFormInputs(validationFn) {
    const emailContent = document.getElementById("login_email_input").value;
    const passwordContent = document.getElementById(
      "login_password_input"
    ).value;
    const loginFormContent = {
      emailContent,
      passwordContent,
    };
    validationFn(loginFormContent);
  }
}
export default new LoginView();

import Views from "./Views.js";
/**
 * Checks the login inputs and attaches a handler to the login submission button.
 */
class LoginView extends Views {
  /**
   * Listens for the 'input' events for both fields and attaches a handler.
   * @param {*} handler
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
   * Attaches a handler after the form submission which tracks whether the 'remember me' checkbox has been checked or not.
   * @param {Function} handler to be executed with parameter object showing whether the checkbox has been checked.
   */
  addRememberMeHandler(handler) {
    const obj = {
      checked: document.getElementById("remember-me-checkbox").checked,
    };
    handler(obj);
  }
  /**
   * Listens for the "click" event and attaches a handler for the form submission.
   * @callback handler function for the form submission.
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
   * Gets the login inputs.
   * @param {Function} validationFn validates the login inputs.
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

import Views from "./Views.js";
/**
 * Gets user input from the registration form, attach handler to "Sign Up" button, hides, shows error paragraphs regarding each of the input fields.
 */
class RegistrationView extends Views {
  /**
   * Disables or enables "Sign Up" button, adds or removes the tooltip.
   * @param {boolean} boolean indicates whether the "Sign Up" button should be endbled or not and whether the tooltip should be hidden or not.
   */
  disabledHandler(boolean) {
    const regBtn = document.querySelector(".register_btn");
    regBtn.disabled = boolean ? false : true;
    boolean
      ? document.querySelector(".register-tooltip").classList.add("hidden")
      : document.querySelector(".register-tooltip").classList.remove("hidden");
  }
  /**
   * Shows an error paragraph to the user.
   * @param {string} inputEnd indicates which paragraph should be shown.
   */
  showPara(inputEnd) {
    document
      .querySelector(`.para_register_${inputEnd}`)
      .classList.remove("hidden");
  }
  /**
   * Hides an error paragraph.
   * @param {string} inputEnd indicates which paragraph should be hidden.
   */
  hidePara(inputEnd) {
    document
      .querySelector(`.para_register_${inputEnd}`)
      .classList.add("hidden");
  }
  /**
   * Clears all of the error paragraphs.
   */
  clearParas() {
    document.querySelector(".para_register_email").classList.add("hidden");
    document.querySelector(".para_register_phone").classList.add("hidden");
    document.querySelector(".para_register_password").classList.add("hidden");
    document
      .querySelector(".para_register_password_confirm")
      .classList.add("hidden");
    document.querySelector(".para_register_address").classList.add("hidden");
  }
  /**
   * Clears all of the user inputs.
   */
  clearInputs() {
    document.getElementById("registration_email_input").value = "";
    document.getElementById("registration_phone_input").value = "";
    document.getElementById("registration_password_input").value = "";
    document.getElementById("registration_password_confirm").value = "";
    document.getElementById("registration_address_input").value = "";
  }
  /**
   * Function to be executed when the button "Sign Up" is clicked.
   * @callback registrationSubmissionHandlerFn
   */
  /**
   * Listens for "click" event for the "Sign Up" button and adds a handler function.
   * @param {registrationSubmissionHandlerFn} handler function to be executed when the button is clicked.
   */
  addSignUpBtnHandler(handler) {
    document.querySelector(".register_btn").addEventListener("click", handler);
  }
  /**
   * Validates all of the inputs.
   * @callback validationRegistrationHandlerFn
   * @param {object} registrationFormContent the content of the registration form inputs.
   */
  /**
   * Gets all of the registration form inputs.
   * @param {validationRegistrationHandlerFn} validationFn Callback that validates all of the inputs
   */
  getRegistrationFormInputs(validationFn) {
    const emailContent = document.getElementById(
      "registration_email_input"
    ).value;
    const phoneContent = document.getElementById(
      "registration_phone_input"
    ).value;
    const passwordContent = document.getElementById(
      "registration_password_input"
    ).value;
    const passwordConfirmContent = document.getElementById(
      "registration_password_confirm"
    ).value;
    const addressContent = document.getElementById(
      "registration_address_input"
    ).value;
    const registrationFormContent = {
      emailContent,
      phoneContent,
      passwordContent,
      passwordConfirmContent,
      addressContent,
    };
    validationFn(registrationFormContent);
  }
}
export default new RegistrationView();

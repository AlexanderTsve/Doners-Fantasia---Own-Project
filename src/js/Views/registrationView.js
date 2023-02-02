import View from "./View.js";
class RegistrationView extends View {
  disabledHandler(boolean) {
    const regBtn = document.querySelector(".register_btn");
    regBtn.disabled = boolean ? false : true;
  }
  showPara(inputEnd) {
    document
      .querySelector(`.para_register_${inputEnd}`)
      .classList.remove("not_visible");
  }
  hidePara(inputEnd) {
    document
      .querySelector(`.para_register_${inputEnd}`)
      .classList.add("not_visible");
  }
  clearParas() {
    document.querySelector(".para_register_email").classList.add("not_visible");
    document.querySelector(".para_register_phone").classList.add("not_visible");
    document
      .querySelector(".para_register_password")
      .classList.add("not_visible");
    document
      .querySelector(".para_register_password_confirm")
      .classList.add("not_visible");
    document
      .querySelector(".para_register_address")
      .classList.add("not_visible");
  }
  clearInputs() {
    document.getElementById("registration_email_input").value = "";
    document.getElementById("registration_phone_input").value = "";
    document.getElementById("registration_password_input").value = "";
    document.getElementById("registration_password_confirm").value = "";
    document.getElementById("registration_address_input").value = "";
  }
  addSignUpBtnHandler(handler) {
    document.querySelector(".register_btn").addEventListener("click", handler);
  }
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

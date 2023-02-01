import View from "./View.js";

class RegistrationView extends View {
  addShowModalHandler(showModalHandler) {
    document
      .querySelector(".nav__item_register")
      .addEventListener("click", showModalHandler);
  }
  addHideRegisterModalHandler(hideModalHandler) {
    document
      .querySelector(".cancel_registration_btn")
      .addEventListener("click", hideModalHandler);
  }
  showRegistrationModal() {
    document.querySelector(".modal_registration").style.display = "block";
  }
  hideRegistrationModal() {
    document.querySelector(".modal_registration").style.display = "none";
  }
  addInputFieldHandler(handler, elementId) {
    document.getElementById(elementId).addEventListener("input", handler);
  }
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
  addSignUpBtnHandler(handler) {
    document
      .querySelector(".register_btn")
      .addEventListener("click", function () {
        document.getElementById("registration_email_input").value = "";
        document.getElementById("registration_phone_input").value = "";
        document.getElementById("registration_password_input").value = "";
        document.getElementById("registration_password_confirm").value = "";
        document.getElementById("registration_address_input").value = "";
        handler();
      });
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

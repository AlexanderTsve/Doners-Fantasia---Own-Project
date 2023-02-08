import Views from "./Views.js";

class LoginView extends Views {
  addInputFieldsHandler(handler) {
    document
      .getElementById("login_email_input")
      .addEventListener("input", handler);
    document
      .getElementById("login_password_input")
      .addEventListener("input", handler);
  }
  addLoginBtnHandler(handler) {
    document.querySelector(".login_btn").addEventListener("click", handler);
  }
  clearInputs() {
    document.getElementById("login_email_input").value = "";
    document.getElementById("login_password_input").value = "";
  }
  showLoginErrorPara() {
    document.querySelector(".para_login").classList.remove("not_visible");
  }
  hideLoginErrorPara() {
    document.querySelector(".para_login").classList.add("not_visible");
  }
  changeWelcomePara(isLogged, name = null) {
    const divEl = document.querySelector(".welcome-para");
    divEl.firstChild.innerText =
      "Welcome, " + (isLogged ? `${name}!` : "guest!");
  }
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

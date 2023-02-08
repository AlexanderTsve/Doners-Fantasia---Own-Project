import Views from "./Views.js";
class LogoutView extends Views {
  addLogoutHandler(handler) {
    document
      .querySelector(".nav__item_logout")
      .addEventListener("click", handler);
  }
}
export default new LogoutView();

import Views from "./Views.js";
class NavigationView extends Views {
  toggleHideShowNavigationBtn(loggedData) {
    if (!loggedData) {
      document.querySelector(".nav__item_logout").classList.add("hidden");
      document.querySelector(".nav__item_login").classList.remove("hidden");
      document.querySelector(".nav__item_register").classList.remove("hidden");
      document
        .querySelector(".nav__item_order-history")
        .classList.add("hidden");
    }
    if (loggedData) {
      document.querySelector(".nav__item_logout").classList.remove("hidden");
      document.querySelector(".nav__item_login").classList.add("hidden");
      document.querySelector(".nav__item_register").classList.add("hidden");
      document
        .querySelector(".nav__item_order-history")
        .classList.remove("hidden");
    }
  }
}
export default new NavigationView();

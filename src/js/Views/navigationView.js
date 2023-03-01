import Views from "./Views.js";
/**
 * Shows the correct navigation depending whether the user is a guest or is logged in.
 */
class NavigationView extends Views {
  /**
   * Shows or hides the correct buttons in the navigation bar.
   * @param {object} loggedData indicates whether the user is a guest or is logged in.
   */
  toggleHideShowNavigationBtn(loggedData) {
    const logoutNavItem = document.querySelector(".nav__item_logout");
    const loginNavItem = document.querySelector(".nav__item_login");
    const registerNavItem = document.querySelector(".nav__item_register");
    const orderHistoryNavItem = document.querySelector(
      ".nav__item_order-history"
    );
    if (!loggedData) {
      logoutNavItem.classList.add("hidden");
      loginNavItem.classList.remove("hidden");
      registerNavItem.classList.remove("hidden");
      orderHistoryNavItem.classList.add("hidden");
    }
    if (loggedData) {
      logoutNavItem.classList.remove("hidden");
      loginNavItem.classList.add("hidden");
      registerNavItem.classList.add("hidden");
      orderHistoryNavItem.classList.remove("hidden");
    }
  }
}
export default new NavigationView();

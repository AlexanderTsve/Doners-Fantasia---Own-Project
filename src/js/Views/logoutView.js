import Views from "./Views.js";
/**
 * Attaches a handler to the logout button.
 */
class LogoutView extends Views {
  /**
   * Function to be executed when 'Logout' has been clicked.
   * @callback logoutHandler
   */
  /**
   * Listens for the "click" event and attaches a handler to the logout button.
   * @param {logoutHandler} handler function to be executed when the button is clicked.
   */
  addLogoutHandler(handler) {
    document
      .querySelector(".nav__item_logout")
      .addEventListener("click", handler);
  }
}
export default new LogoutView();

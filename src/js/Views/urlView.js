import Views from "./Views.js";
/**
 * Attaches handlers to the respective elements or when a specific event occurs - deals with the url changes.
 */
class UrlView extends Views {
  /**
   * Function for the initial loading of the website.
   * @callback loadWindowHandler
   */
  /**
   * Listens for the 'load' event associated with the window BOM object.
   * @param {loadWindowHandler} handler Callback that handles the initial loading of the website.
   */
  addUrlChangeHandler(handler) {
    window.addEventListener("load", handler);
  }
  /**
   * Function that handles the hashchange.
   * @callback hashChangeHandler
   */
  /**
   * Listens for the 'hashchange' event associated with the window BOM object.
   * @param {hashChangeHandler} handler Callback that handles the hashchange.
   */
  addHashChangeHandler(handler) {
    window.addEventListener("hashchange", handler);
  }
  /**
   * Function that handles the navigation to the menu page.
   * @callback changePageToMenuPageHandler
   */
  /**
   * Listens for the 'click' event and executes the handler.
   * @param {changePageToMenuPageHandler} handler Callback that handles the navigation to the menu page.
   */
  addUrlChangeHandlerToMain(handler) {
    document.querySelector(".menu-item").addEventListener("click", handler);
  }
  /**
   * Function that handles the navigation to the restaurants page.
   * @callback changePageToRestaurantsPageHandler
   */
  /**
   * Listens for the 'click' event and executes the handler.
   * @param {changePageToRestaurantsPageHandler} handler Callback that handles the navigation to the restaurants page.
   */
  addUrlChangeHandlerToRestaurants(handler) {
    document
      .querySelector(".footer_item_restaurants")
      .addEventListener("click", handler);
  }
  /**
   * Function that handles the navigation to the feedback page.
   * @callback changePageToFeedbackPageHandler
   */
  /**
   * Listens for the 'click' event and executes the handler.
   * @param {changePageToFeedbackPageHandler} handler Callback that handles the navigation to the feedback page.
   */
  addUrlChangeHandlerToFeedback(handler) {
    document
      .querySelector(".footer_item_feedback")
      .addEventListener("click", handler);
  }
  /**
   * Function that handles the navigation to the cart page.
   * @callback changePageToCartPageHandler
   */
  /**
   * Listens for the 'click' event and executes the handler.
   * @param {changePageToCartPageHandler} handler Callback that handles the navigation to the cart page.
   */
  addUrlChangeHandlerToCartPage(handler) {
    document.querySelector(".cart-el").addEventListener("click", handler);
  }
}
export default new UrlView();

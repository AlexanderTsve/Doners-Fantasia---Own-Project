import Views from "./Views.js";
class UrlView extends Views {
  addUrlChangeHandler(handler) {
    window.addEventListener("load", handler);
  }
  addHashChangeHandler(handler) {
    window.addEventListener("hashchange", handler);
  }
  addUrlChangeHandlerToMain(handler) {
    document.querySelector(".menu-item").addEventListener("click", handler);
  }
  addUrlChangeHandlerToRestaurants(handler) {
    document
      .querySelector(".footer_item_restaurants")
      .addEventListener("click", handler);
  }
  addUrlChangeHandlerToFeedback(handler) {
    document
      .querySelector(".footer_item_feedback")
      .addEventListener("click", handler);
  }
  addUrlChangeHandlerToCartPage(handler) {
    document.querySelector(".cart-el").addEventListener("click", handler);
  }
}
export default new UrlView();

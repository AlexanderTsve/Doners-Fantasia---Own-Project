class UrlView {
  addUrlChangeHandler(handler) {
    window.addEventListener("load", handler);
  }
  addHashChangeHandler(handler) {
    window.addEventListener("hashchange", handler);
  }
  addBeforeUnloadHandler(handler) {
    window.addEventListener("beforeunload", handler);
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

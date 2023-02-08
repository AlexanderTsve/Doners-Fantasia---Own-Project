class UrlView {
  addUrlChangeHandler(handler) {
    window.addEventListener("load", handler);
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
}
export default new UrlView();

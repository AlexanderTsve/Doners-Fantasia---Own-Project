class UrlView {
  addUrlChangeHandler(handlerUrlChange) {
    window.addEventListener("load", handlerUrlChange);
  }
  addUrlChangeHandlerToMain(handlerUrlChangeToMain) {
    document
      .querySelector(".menu-item")
      .addEventListener("click", handlerUrlChangeToMain);
  }
  addUrlChangeHandlerToRestaurants(handlerUrlChangeToRestaurants) {
    document
      .querySelector(".footer_item_restaurants")
      .addEventListener("click", handlerUrlChangeToRestaurants);
  }
  addUrlChangeHandlerToFeedback(handlerUrlChangeToFeedback) {
    document
      .querySelector(".footer_item_feedback")
      .addEventListener("click", handlerUrlChangeToFeedback);
  }
}
export default new UrlView();

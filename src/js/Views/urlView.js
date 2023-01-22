class UrlView {
  addUrlChangeHandler(handlerUrlChange, handlerUrlChangeToMain) {
    window.addEventListener("load", handlerUrlChange);
    document
      .querySelector(".menu-item")
      .addEventListener("click", handlerUrlChangeToMain);
  }
}
export default new UrlView();

class UrlView {
  urlChangeHandler(handler) {
    window.addEventListener("load", handler);
  }
}
export default new UrlView();

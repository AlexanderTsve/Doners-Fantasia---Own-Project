class UrlView {
  addUrlChangeHandler(handler) {
    window.addEventListener("load", handler);
  }
}
export default new UrlView();

class SearchView {
  _parentElement = document.querySelector(".search_input");
  _errorMessage = "There is no such product!";
  getQuery() {
    return this._parentElement.lastElementChild.value;
  }
  _debounce(func, delay) {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  addHandlerSearch(handler) {
    this._parentElement.lastElementChild.addEventListener(
      "input",
      this._debounce(handler, 500)
    );
  }
  clearSearchValue() {
    this._parentElement.lastElementChild.value = "";
  }
}
export default new SearchView();

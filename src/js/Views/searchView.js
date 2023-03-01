/**
 * Gets the search results, attach debounce function to the search, clears the input field.
 */
class SearchView {
  _parentElement = document.querySelector(".search_input");
  /**
   * Gets the user input in the search field.
   * @returns {string} the user input.
   */
  getQuery() {
    return this._parentElement.lastElementChild.value;
  }
  /**
   * Function to be called when the input changes.
   * @callback searchInputHandler
   */
  /**
   * Listens for the "input" event and attach a handler.
   * @param {searchInputHandler} handler callback that handles the search field input changes and sends a request to the database.
   */
  addHandlerSearch(handler) {
    this._parentElement.lastElementChild.addEventListener(
      "input",
      this._debounce(handler, 500)
    );
  }
  /**
   * Clears the search field input.
   */
  clearSearchValue() {
    this._parentElement.lastElementChild.value = "";
  }
  /**
   * Handles the sending of the search request.
   * @callback sendSearchRequestFunction
   */
  /**
   * Debounce function for the request.
   * @param {sendSearchRequestFunction} func Handles the sending of the search request.
   * @param {number} delay Number of the ms which should be delayed - in order to minimize th number of the request sent when the input changes.
   * @returns {} void function.
   */
  _debounce(func, delay) {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
}
export default new SearchView();

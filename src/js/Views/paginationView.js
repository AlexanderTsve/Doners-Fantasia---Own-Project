import Views from "./Views.js";
/**
 * Renders the pagination on the menu page.
 */
class PaginationView extends Views {
  _parentElement = document.querySelector(".pagination_menu_page");
  /**
   * Renders the pagination.
   * @param {object} data from which the correct page number is taken.
   */
  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  /**
   * Handles pagination buttons.
   * @callback navigateToPageHandlerFn
   * @param {number} goToPage of the page
   */
  /**
   * Listens for the 'click' event and attaches a handler function to the respective button.
   * @param {navigateToPageHandlerFn} handler for handling the pagination.
   */
  addHandlerClickBtn(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--inline");
      if (!btn) {
        return;
      }
      const goToPage = Number(btn.dataset.goto);
      handler(goToPage);
    });
  }
  /**
   * Private method, generates the correct pagination buttons markup.
   * @param {string} direction indicates the correct "arrow" on the buttons.
   * @param {number} currentPage the number of the page on the button.
   * @returns {HTMLElement} which represents the pagination buttons.
   */
  _generateBtnMarkup(direction, currentPage) {
    return `<button data-goto="${
      direction === "prev" ? currentPage - 1 : currentPage + 1
    }" class='btn--inline pagination__btn--${direction}'><span>${
      direction === "prev" ? "<<--" : "-->>"
    }</span><span>Page ${
      direction === "prev" ? currentPage - 1 : currentPage + 1
    }</span></button>`;
  }
  /**
   * Private method, generates the pagination paragraph (between the buttons).
   * @param {number} currentPage the currently rendered page.
   * @param {number} numPages the total number of pages.
   * @returns {HTMLElement} paragraph indicating which page is currently rendered to the user.
   */
  _generateParaMarkup(currentPage, numPages) {
    return `<p class='para_current-page'>Page ${currentPage} of ${numPages}</p>`;
  }
  /**
   * Generates the whole paragraph - the paragraph plus the buttons.
   * @returns {HTMLElement} paragraph indicating which page is currently rendered to the user along with the buttons for changing the page.
   */
  _generateMarkup() {
    const currentPage = this._data.productsPageNumber;
    const numPages =
      Math.ceil(this._data.products.length / this._data.productsPerPage) || 1;
    if (numPages > 1 && currentPage === 1) {
      return `${this._generateParaMarkup(
        currentPage,
        numPages
      )}${this._generateBtnMarkup("next", currentPage)}`;
    }
    if (numPages === 1 && currentPage === 1) {
      return `${this._generateParaMarkup(currentPage, numPages)}`;
    }
    if (numPages === currentPage) {
      return `${this._generateBtnMarkup(
        "prev",
        currentPage
      )}${this._generateParaMarkup(currentPage, numPages)}`;
    }
    if (currentPage < numPages && currentPage !== 1) {
      return `${this._generateBtnMarkup(
        "prev",
        currentPage
      )}${this._generateParaMarkup(
        currentPage,
        numPages
      )}${this._generateBtnMarkup("next", currentPage)}`;
    }
  }
}
export default new PaginationView();

import View from "./View.js";
class PaginationView extends View {
  _parentElement = document.querySelector(".pagination_menu_page");
  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
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
  _generateBtnMarkup(direction, currentPage) {
    return `<button data-goto="${
      direction === "prev" ? currentPage - 1 : currentPage + 1
    }" class='btn--inline pagination__btn--${direction}'><span>${
      direction === "prev" ? "<<--" : "-->>"
    }</span><span>Page ${
      direction === "prev" ? currentPage - 1 : currentPage + 1
    }</span></button>`;
  }
  _generateParaMarkup(currentPage, numPages) {
    return `<p class='para_current-page'>Page ${currentPage} of ${numPages}</p>`;
  }
  _generateMarkup() {
    const currentPage = this._data.productsPageNumber;
    const numPages = Math.ceil(
      this._data.products.length / this._data.productsPerPage
    );
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

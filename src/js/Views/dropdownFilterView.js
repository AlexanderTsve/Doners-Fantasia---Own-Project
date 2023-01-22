class DropdownFilterView {
  _parentElement = document.getElementById("category");

  getDropdownValue() {
    return this._parentElement.options[this._parentElement.selectedIndex].value;
  }

  addHandlerDropdownFilter(handler) {
    this._parentElement.addEventListener("change", handler);
  }
  clearValue() {
    this._parentElement.selectedIndex = 0;
  }
}

export default new DropdownFilterView();

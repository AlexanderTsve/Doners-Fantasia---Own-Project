/**
 * Gets the selected option from the dropdown, listens for the change of the option and attaches a handler function.
 */
class DropdownFilterView {
  _parentElement = document.getElementById("category");
  /**
   * Gets the selected option.
   * @returns {String} indicating which is the selected option.
   */
  getDropdownValue() {
    return this._parentElement.options[this._parentElement.selectedIndex].value;
  }
  /**
   * Listens for the "change" event and attaches a handler for it.
   * @callback handler function to be executed when the event happens.
   */
  addHandlerDropdownFilter(handler) {
    this._parentElement.addEventListener("change", handler);
  }
  /**
   * Selects the default option.
   */
  clearValue() {
    this._parentElement.selectedIndex = 0;
  }
}
export default new DropdownFilterView();

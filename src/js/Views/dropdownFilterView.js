import { DEFAULT_DROPDOWN_OPTION } from "../config.js";
/**
 * Gets the selected option from the dropdown, listens for the change of the option and attaches a handler function.
 */
class DropdownFilterView {
  _parentElement = document.getElementById("category");
  /**
   * Gets the selected option.
   * @returns {string} indicating which is the selected option.
   */
  getDropdownValue() {
    return this._parentElement.options[this._parentElement.selectedIndex].value;
  }
  /**
   * Function to be executed when the event "change" happens.
   * @callback dropdownHandlerFn
   */
  /**
   * Listens for the "change" event and attaches a handler for it.
   * @param {dropdownHandlerFn} handler callback to be executed when the event happens.
   */
  addHandlerDropdownFilter(handler) {
    this._parentElement.addEventListener("change", handler);
  }
  /**
   * Selects the default option.
   */
  clearValue() {
    this._parentElement.selectedIndex = DEFAULT_DROPDOWN_OPTION;
  }
}
export default new DropdownFilterView();

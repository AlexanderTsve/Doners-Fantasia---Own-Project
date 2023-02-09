import * as bootstrap from "bootstrap";
import dropdownFilterView from "../Views/dropdownFilterView.js";
import searchView from "../Views/searchView.js";
export const clearDropdownAndSearchField = () => {
  dropdownFilterView.clearValue();
  searchView.clearSearchValue();
};

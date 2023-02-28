import { state } from "./state.js";
/**
 * Checks whether the order form inputs data has been correct and whether the user is logged.
 * @returns {boolean} whether both of the conditions are true.
 */
export const checkLoginAndOrderFormData = () => {
  return state.orderDataIsOk && Object.keys(state.loggedUser).length > 0;
};

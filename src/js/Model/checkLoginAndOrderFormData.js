import { state } from "./state.js";
export const checkLoginAndOrderFormData = () => {
  return (
    state.orderDataIsOk &&
    localStorage.getItem("donerFantasiaLoggedUser") &&
    Object.keys(localStorage.getItem("donerFantasiaLoggedUser")).length > 0
  );
};

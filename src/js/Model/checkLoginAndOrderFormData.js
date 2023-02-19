import { state } from "./state.js";
export const checkLoginAndOrderFormData = () => {
  return (
    state.orderDataIsOk &&
    (Object.keys(localStorage.getItem("donerFantasiaLoggedUser")).length > 0 ||
      !localStorage.getItem("donerFantasiaLoggedUser"))
  );
};

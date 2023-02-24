import { state } from "./state.js";
export const checkLoginAndOrderFormData = () => {
  return (
    state.orderDataIsOk &&
    state.loggedUser &&
    Object.keys(state.loggedUser).length > 0
  );
};

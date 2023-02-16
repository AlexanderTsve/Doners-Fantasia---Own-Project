import { isThereRememberedUser } from "../Model/isThereRememberedUser.js";
import { clearLoginState } from "../Model/clearLoginState.js";
export const controlBeforeUnloadEvent = () => {
  // const isThereRemUser = isThereRememberedUser();
  // if (isThereRemUser) {
  //   return;
  // }
  // if (!isThereRemUser) {
  //   clearLoginState();
  // }
};

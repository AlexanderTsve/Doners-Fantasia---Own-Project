import { USER_HISTORY_URL } from "../config.js";
import { sendOrderData } from "../helpers.js";
import { state } from "./state.js";
export const submitOrderForm = async () => {
  try {
    const userId = state.loggedUserId;
    if (userId) {
      await sendOrderData(
        `${USER_HISTORY_URL.replace("/user/", `/${userId}/`)}`
      );
      (state.orderData = {
        nameContent: "",
        emailContent: "",
        phoneContent: "",
        addressContent: "",
        nameContentIsOk: false,
        emailContentIsOk: false,
        phoneContentIsOk: false,
        addressContentIsOk: false,
      }),
        localStorage.removeItem("doner-cart");
    }
  } catch (err) {
    throw err;
  }
};

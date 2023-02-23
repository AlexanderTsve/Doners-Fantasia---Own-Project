import { USER_HISTORY_URL } from "../config.js";
import { sendOrderData } from "../helpers.js";
export const submitOrderForm = async () => {
  try {
    const userId = JSON.parse(
      localStorage.getItem("donerFantasiaLoggedUserId")
    );
    if (userId) {
      await sendOrderData(
        `${USER_HISTORY_URL.replace("/user/", `/${userId}/`)}`
      );
      return "Your order has been successful! Thank you!";
    }
  } catch (err) {
    return err.message;
  }
};

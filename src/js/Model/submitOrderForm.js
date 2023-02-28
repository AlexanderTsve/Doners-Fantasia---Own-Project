import {
  USER_HISTORY_URL,
  USERS_URL,
  LOCAL_STORAGE_REMEMBERED_USER_KEY,
  LOCAL_STORAGE_DONER_CART_KEY,
} from "../config.js";
import { sendOrderData } from "../helpers.js";
import { state } from "./state.js";
import { getUsers } from "../helpers.js";
/**
 * Submits the order form.
 */
export const submitOrderForm = async () => {
  try {
    let userId = state.loggedUserId;
    const rememberedUser = localStorage.getItem(
      LOCAL_STORAGE_REMEMBERED_USER_KEY
    );
    if (!userId && rememberedUser) {
      const dataArr = await getUsers(USERS_URL);
      state.loggedUserId = Object.entries(dataArr).filter((array) =>
        array.some((el) => el.email === JSON.parse(rememberedUser).email)
      )[0][0];
      userId = state.loggedUserId;
    }
    if (userId) {
      await sendOrderData(
        `${USER_HISTORY_URL.replace("/user/", `/${userId}/`)}`,
        state.orderData
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
        localStorage.removeItem(LOCAL_STORAGE_DONER_CART_KEY);
    }
  } catch (err) {
    throw err;
  }
};

import { state } from "./state.js";
import { sendAuthData, getUsers } from "../helpers";
import { POST_LOGIN_URL, LOGIN_AUTH_ERROR, USERS_URL } from "../config.js";
import { async } from "regenerator-runtime";
/**
 * Submits the login form.
 */
export const submitLoginForm = async () => {
  try {
    await sendAuthData(POST_LOGIN_URL, state.loginFormData, LOGIN_AUTH_ERROR);
    const dataArr = await getUsers(USERS_URL);
    if (
      !Object.values(dataArr).find(
        (user) => user.email === state.loginFormData.emailContent
      )
    ) {
      throw new Error(LOGIN_AUTH_ERROR);
    }
    state.loggedUser = Object.values(dataArr).find(
      (user) => user.email === state.loginFormData.emailContent
    );
    state.loggedUserId = Object.entries(dataArr).filter((array) =>
      array.some((el) => el.email === state.loginFormData.emailContent)
    )[0][0];
  } catch (err) {
    throw err;
  }
};

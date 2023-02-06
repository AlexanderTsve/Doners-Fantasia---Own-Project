import { state } from "./state.js";
import { sendAuthData } from "../helpers";
import { POST_LOGIN_URL, LOGIN_AUTH_ERROR, USERS_URL } from "../config.js";
import { async } from "regenerator-runtime";
export const submitLoginForm = async () => {
  try {
    await sendAuthData(POST_LOGIN_URL, state.loginFormData, LOGIN_AUTH_ERROR);
    const dataArr = await getUsers(USERS_URL);
    state.loggedUser = Object.values(dataArr).find(
      (user) => user.email === state.loginFormData.emailContent
    );
    state.isLogged = true;
  } catch (err) {
    throw err;
  }
};
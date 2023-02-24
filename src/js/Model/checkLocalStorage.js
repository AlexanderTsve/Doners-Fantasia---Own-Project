import { getUsers } from "../helpers.js";
import { state } from "./state.js";
import { USERS_URL } from "../config.js";
export const checkLocalStorage = async () => {
  const rememberedUser = localStorage.getItem("rememberUser");
  if (!rememberedUser) {
    return;
  }
  const dataArr = await getUsers(USERS_URL);
  state.loggedUser = Object.values(dataArr).find(
    (user) => user.email === state.loginFormData.emailContent
  );
  localStorage.setItem("rememberUser", JSON.stringify(state.loggedUser));
};

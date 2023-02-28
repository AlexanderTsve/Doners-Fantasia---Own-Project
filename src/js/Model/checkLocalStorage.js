import { getUsers } from "../helpers.js";
import { state } from "./state.js";
import { USERS_URL, LOCAL_STORAGE_REMEMBERED_USER_KEY } from "../config.js";
/**
 * Checks the local storage for remembered user and if there is one sends a request to the database.
 * @returns if there is no remembered user.
 */
export const checkLocalStorage = async () => {
  const rememberedUser = localStorage.getItem(
    LOCAL_STORAGE_REMEMBERED_USER_KEY
  );
  if (!rememberedUser) {
    return;
  }
  const dataArr = await getUsers(USERS_URL);
  state.loggedUser = Object.values(dataArr).find(
    (user) => user.email === JSON.parse(rememberedUser).email
  );
  localStorage.setItem(
    LOCAL_STORAGE_REMEMBERED_USER_KEY,
    JSON.stringify(state.loggedUser)
  );
};

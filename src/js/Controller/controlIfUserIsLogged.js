import { state } from "../Model/state.js";
import navigationView from "../Views/navigationView.js";
import loginView from "../Views/loginView.js";
import orderHistoryView from "../Views/orderHistoryView.js";
/**
 * Controls what should be shown the user if it has been logged in to the site.
 * @returns if the user is not logged in.
 */
export const controlIfUserIsLogged = () => {
  if (Object.keys(state.loggedUser).length === 0) {
    return;
  }
  navigationView.toggleHideShowNavigationBtn(state.loggedUser);
  loginView.changeWelcomePara(state.loggedUser, state.loggedUser.email);
  orderHistoryView.render(state.loggedUser);
};

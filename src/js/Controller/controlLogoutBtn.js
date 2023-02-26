import * as bootstrap from "bootstrap";
import { state } from "../Model/state.js";
import { clearLoginState } from "../Model/clearLoginState.js";
import navigationView from "../Views/navigationView.js";
import loginView from "../Views/loginView.js";
import cartPageView from "../Views/cartPageView.js";
import orderHistoryView from "../Views/orderHistoryView.js";
import { checkLoginAndOrderFormData } from "../Model/checkLoginAndOrderFormData.js";
export const controlLogoutBtn = () => {
  clearLoginState();
  navigationView.toggleHideShowNavigationBtn(state.isLogged);
  loginView.changeWelcomePara(state.isLogged);
  state.orderDataIsOk =
    state.orderData.addressContentIsOk &&
    state.orderData.emailContentIsOk &&
    state.orderData.nameContentIsOk &&
    state.orderData.phoneContentIsOk;
  const bool = checkLoginAndOrderFormData();
  cartPageView.toggleOrderBtnDisabledAttr(bool);
  orderHistoryView.render(state.loggedUser);
};

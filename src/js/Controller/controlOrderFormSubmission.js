import { async } from "regenerator-runtime";
import { checkLocalStorage } from "../Model/checkLocalStorage.js";
import { submitOrderForm } from "../Model/submitOrderForm.js";
import cartPageView from "../Views/cartPageView.js";
import { renderCartData } from "./controlCartProducts.js";
import { state } from "../Model/state.js";
import orderHistoryView from "../Views/orderHistoryView.js";
import { getUsers } from "../helpers.js";
import { USERS_URL } from "../config.js";
export const controlOrderFormSubmission = async () => {
  let response;
  try {
    await submitOrderForm();
    response = "Your order has been successful! Thank you!";
    const dataArr = await getUsers(USERS_URL);
    state.loggedUser = Object.values(dataArr).find(
      (user) => user.email === state.loggedUser.email
    );
    orderHistoryView.render(state.loggedUser);
  } catch (err) {
    response = err.message;
  } finally {
    cartPageView.showMessageModal(response, "order-form-modal");
    await checkLocalStorage();
    renderCartData();
  }
};

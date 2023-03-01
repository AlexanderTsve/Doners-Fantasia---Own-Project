import Views from "./Views.js";
import { NO_PREVIOUS_ORDERS_MSG } from "../config.js";
/**
 * Renders order history page.
 */
class OrderHistoryView extends Views {
  _parentElement = document.querySelector(".order-history-container");
  /**
   * Renders the order history page depending on the data param - rendering all of the orders made by the currently logged in user.
   * @param {object} data from which we take the orderHistory property's value (an array of orders).
   * @returns if the orderHistory property is an empty array or if it does not exist.
   */
  render(data) {
    if (
      !data.orderHistory ||
      (Array.isArray(data.orderHistory) && data.orderHistory.length === 0)
    ) {
      this._parentElement.innerText = NO_PREVIOUS_ORDERS_MSG;
      return;
    }
    const orderData = Object.values(data.orderHistory);
    this._data = orderData;
    const markupArr = this._generateOrderHistoryMarkup(this._data);
    this._clear();
    markupArr.forEach((element) => {
      this._parentElement.append(element);
    });
  }
  /**
   * Private method, generates the DOM element for each order from an array of orders.
   * @param {object[]} arrOfOrders of orders.
   * @returns {HTMLElement} rendering all of the orders made by the currently logged in user.
   */
  _generateOrderHistoryMarkup(arrOfOrders) {
    return arrOfOrders
      .map((order) => {
        const orderDivEl = document.createElement("div");
        const addressDivEl = document.createElement("div");
        const addressContentParaEl = document.createElement("p");
        const cartDivEl = document.createElement("div");
        const dateParaEl = document.createElement("p");
        const deliveryParaEl = document.createElement("p");
        const totalAmountParaEl = document.createElement("p");
        const cartParaEl = document.createElement("p");
        addressContentParaEl.innerText = `Delivery Address: ${order.address}`;
        cartParaEl.innerText = "Products:";
        JSON.parse(order.cart).forEach((product) => {
          const productParaEl = document.createElement("p");
          productParaEl.innerText = `${product.name}, Qty: ${
            product.qty
          }, Price: ${product.price.toFixed(2)}`;
          cartDivEl.append(productParaEl);
        });
        dateParaEl.innerText = `Delivery Date: ${order.date}`;
        dateParaEl.classList.add("order-history-container-order-date");
        deliveryParaEl.innerText = `Delivery Contacts: ${order.name}, ${order.email}, ${order.phone}`;
        totalAmountParaEl.innerText = `Total Price: ${order.totalAmount}`;
        addressDivEl.classList.add("order-history-container-order-address");
        orderDivEl.classList.add("order-history-container-order");
        cartParaEl.classList.add("order-history-container-order-cart");
        totalAmountParaEl.classList.add("order-history-container-order-amount");
        addressDivEl.append(addressContentParaEl);
        orderDivEl.append(
          dateParaEl,
          addressDivEl,
          deliveryParaEl,
          cartParaEl,
          cartDivEl,
          totalAmountParaEl
        );
        return orderDivEl;
      })
      .reverse();
  }
}
export default new OrderHistoryView();

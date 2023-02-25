import Views from "./Views.js";
class OrderHistoryView extends Views {
  _parentElement = document.querySelector(".order-history-container");
  render(data) {
    if (!data || data.length === 0) {
      this._parentElement.innerText =
        "There are no previous orders from this profile!";
      return;
    }
    this._data = data;
    const markupArr = this._generateOrderHistoryMarkup(this._data);
    this._clear();
    markupArr.forEach((element) => {
      this._parentElement.append(element);
    });
  }
  _generateOrderHistoryMarkup(arrOfOrders) {
    return arrOfOrders.map((order) => {
      // const orderDivEl = document.createElement("div");
      // const productPara = document.createElement("p");
      // const increaseCountBtn = document.createElement("button");
      // const decreaseCountBtn = document.createElement("button");
      // const removeProductBtn = document.createElement("button");
      // productDivEl.classList.add("cart-container-product");
      // productPara.innerText = `${index + 1}). ${product.name}, Quantity: ${
      //   product.qty
      // }, Price: ${Number(product.price).toFixed(2)} BGN`;
      // productPara.classList.add("cart-container-product-description");
      // increaseCountBtn.classList.add(
      //   "doner_app_button",
      //   "change_qty_btn",
      //   "change_qty_btn_increase",
      //   "cart-container-product-increase"
      // );
      // increaseCountBtn.innerText = "+";
      // decreaseCountBtn.classList.add(
      //   "doner_app_button",
      //   "change_qty_btn",
      //   "change_qty_btn_decrease",
      //   "cart-container-product-decrease"
      // );
      // decreaseCountBtn.innerText = "-";
      // removeProductBtn.innerText = "Remove Item";
      // removeProductBtn.classList.add(
      //   "doner_app_button",
      //   "change_qty_btn_remove",
      //   "cart-container-product-remove"
      // );
      // productDivEl.append(
      //   productPara,
      //   increaseCountBtn,
      //   decreaseCountBtn,
      //   removeProductBtn
      // );
      // return productDivEl;
    });
  }
}
export default new OrderHistoryView();

import Views from "./Views.js";
class CartPageView extends Views {
  _parentElement = document.querySelector(".cart-container");
  render(data) {
    if (!data) {
      this._parentElement.innerText = "No products in the cart!";
      return;
    }
    this._data = data;
    const markupArr = this._generateMarkupArr(this._data);
    this._clear();
    markupArr.forEach((element) => {
      this._parentElement.append(element);
    });
  }
  _increaseQty() {}
  _decreaseQty() {}
  _generateMarkupArr(arrOfProducts) {
    return arrOfProducts.map((product, index) => {
      const productDivEl = document.createElement("div");
      const productPara = document.createElement("p");
      const increaseCountBtn = document.createElement("button");
      const decreaseCountBtn = document.createElement("button");
      const removeProductBtn = document.createElement("button");

      productPara.innerText = `${index + 1}). Product: ${
        product.name
      }, Quantity: ${product.qty}, Price: ${Number(product.price).toFixed(
        2
      )} BGN`;
      increaseCountBtn.classList.add("doner_app_button", "change_qty_btn");
      increaseCountBtn.innerText = "+";
      decreaseCountBtn.classList.add("doner_app_button", "change_qty_btn");
      decreaseCountBtn.innerText = "-";
      removeProductBtn.innerText = "Remove Item";
      increaseCountBtn.addEventListener("click", () => {
        this._increaseQty();
      });
      decreaseCountBtn.addEventListener("click", () => {
        this._decreaseQty();
      });
      productDivEl.append(
        productPara,
        increaseCountBtn,
        decreaseCountBtn,
        removeProductBtn
      );
    });
  }
}
export default new CartPageView();

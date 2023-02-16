import Views from "./Views.js";
class CartPageView extends Views {
  _parentElement = document.querySelector(".cart-container");
  render(data) {
    if (!data || data.length === 0) {
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
  addIncreaseCartQtyHandler(handler) {
    const increaseBtns = [
      ...document.querySelectorAll(".change_qty_btn_increase"),
    ];
    increaseBtns.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        const name = e.target.parentElement.firstChild.innerText
          .split(",")[0]
          .split(".")[1]
          .slice(1);
        const qty = Number(
          e.target.parentElement.firstChild.innerText
            .split(",")[1]
            .split(":")[1]
            .slice(1)
        );
        const price = Number(
          e.target.parentElement.firstChild.innerText
            .split(",")[2]
            .split(":")[1]
            .slice(1)
            .split(" ")[0]
        );
        const obj = {
          name,
          price: price / qty,
          qty: 1,
        };
        handler(obj);
      })
    );
  }
  addDecreaseCartQtyHandler(handler) {
    const decreaseBtns = [
      ...document.querySelectorAll(".change_qty_btn_decrease"),
    ];
    decreaseBtns.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        const name = e.target.parentElement.firstChild.innerText
          .split(",")[0]
          .split(".")[1]
          .slice(1);
        const qty = Number(
          e.target.parentElement.firstChild.innerText
            .split(",")[1]
            .split(":")[1]
            .slice(1)
        );
        const price = Number(
          e.target.parentElement.firstChild.innerText
            .split(",")[2]
            .split(":")[1]
            .slice(1)
            .split(" ")[0]
        );
        const obj = {
          name,
          price: price / qty,
          qty: 1,
        };
        handler(obj);
      })
    );
  }
  addRemoveProductHandler(handler) {
    const removeBtns = [...document.querySelectorAll(".change_qty_btn_remove")];
    removeBtns.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        const name = e.target.parentElement.firstChild.innerText
          .split(",")[0]
          .split(".")[1]
          .slice(1);
        handler(name);
      })
    );
  }
  _generateMarkupArr(arrOfProducts) {
    return arrOfProducts.map((product, index) => {
      const productDivEl = document.createElement("div");
      const productPara = document.createElement("p");
      const increaseCountBtn = document.createElement("button");
      const decreaseCountBtn = document.createElement("button");
      const removeProductBtn = document.createElement("button");
      productDivEl.classList.add("cart-container-product");
      productPara.innerText = `${index + 1}). ${product.name}, Quantity: ${
        product.qty
      }, Price: ${Number(product.price).toFixed(2)} BGN`;
      productPara.classList.add("cart-container-product-description");
      increaseCountBtn.classList.add(
        "doner_app_button",
        "change_qty_btn",
        "change_qty_btn_increase",
        "cart-container-product-increase"
      );
      increaseCountBtn.innerText = "+";
      decreaseCountBtn.classList.add(
        "doner_app_button",
        "change_qty_btn",
        "change_qty_btn_decrease",
        "cart-container-product-decrease"
      );
      decreaseCountBtn.innerText = "-";
      removeProductBtn.innerText = "Remove Item";
      removeProductBtn.classList.add(
        "doner_app_button",
        "change_qty_btn_remove",
        "cart-container-product-remove"
      );
      productDivEl.append(
        productPara,
        increaseCountBtn,
        decreaseCountBtn,
        removeProductBtn
      );
      return productDivEl;
    });
  }
}
export default new CartPageView();

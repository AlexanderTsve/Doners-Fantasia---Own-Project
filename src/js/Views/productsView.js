import Views from "./Views.js";
class ProductsView extends Views {
  _parentElement = document.querySelector(".products-container");
  render(data) {
    if (!data) {
      return this.renderError();
    }
    this._data = data;
    const markupArr = this._generateMarkupArr(this._data);
    this._clear();
    markupArr.forEach((htmlEl) => this._parentElement.append(htmlEl));
  }
  addToCartBtnHandler(validationFn) {
    const arrOfBtns = [...document.querySelectorAll(".add_to_cart_btn")];
    arrOfBtns.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        const name =
          e.target.parentElement.parentElement.firstChild.lastChild.innerText;
        const pricePerUnit = Number(
          e.target.parentElement.parentElement.children[1].lastChild.innerText.split(
            " "
          )[1]
        );
        const qty = Number(e.target.parentElement.firstChild.value);
        const productObj = {
          name,
          price: pricePerUnit * qty,
          qty,
        };
        validationFn(productObj);
        e.target.parentElement.firstChild.value = "";
      })
    );
  }
  renderCartTooltip(data) {
    const container = document.querySelector(".tooltip-container");
    container.innerText = "";
    data.forEach((item, index) => {
      const paraNameEl = document.createElement("p");
      const paraQtyEl = document.createElement("p");
      const paraPriceEl = document.createElement("p");
      paraNameEl.innerText = `${index + 1}). ${item.name}:`;
      paraQtyEl.innerText = `Quantity: ${item.qty} units`;
      paraPriceEl.innerText = `Price: ${item.price.toFixed(2)} BGN`;
      container.append(paraNameEl, paraQtyEl, paraPriceEl);
    });
  }
  _loadImageHandler(container, imageEl, nameEl) {
    container.innerHTML = "";
    container.append(imageEl, nameEl);
    imageEl.classList.remove("loading");
  }
  _changeUrlToDetails(id) {
    window.location.pathname = `/details-page/${id}`;
  }
  _increaseQtyHandler(qtyEl) {
    qtyEl.value++;
  }
  _decreaseQtyHandler(qtyEl) {
    qtyEl.value > 1 ? qtyEl.value-- : (qtyEl.value = "");
  }
  _generateMarkupArr(arrOfProducts) {
    return arrOfProducts.map((product) => {
      const productDivEl = document.createElement("div");
      const figEl = document.createElement("figure");
      const imageEl = document.createElement("img");
      const nameEl = document.createElement("h5");
      const productBodyDivEl = document.createElement("div");
      const weightParaEl = document.createElement("p");
      const categoryParaEl = document.createElement("p");
      const priceParaEl = document.createElement("p");
      const productFooterDivEl = document.createElement("div");
      const inputQtyEl = document.createElement("input");
      const changeQtyDivEl = document.createElement("div");
      const increaseQty = document.createElement("button");
      const decreaseQty = document.createElement("button");
      const addBtnEl = document.createElement("button");
      const detailsBtnEl = document.createElement("button");
      productDivEl.classList.add("card", "text-center");
      productDivEl.classList.add("product_card");
      figEl.classList.add("product_card_header");
      imageEl.classList.add("loading", "card-img-top", "product_card_img");
      imageEl.src = product.imgSrc;
      this._renderInternalSpinner(figEl);
      imageEl.addEventListener("load", () => {
        this._loadImageHandler(figEl, imageEl, nameEl);
      });
      nameEl.innerText = `${product.name}`;
      nameEl.classList.add("card-title");
      weightParaEl.innerText = product.weight
        ? `Weight(gr): ${product.weight}`
        : "";
      categoryParaEl.innerText = `Category: ${product.category}`;
      priceParaEl.innerText = `Price: ${Number(product.price).toFixed(2)} BGN`;
      productBodyDivEl.classList.add("card-body", "product_card_body");
      inputQtyEl.setAttribute("type", "number");
      inputQtyEl.setAttribute("placeholder", "count...");
      inputQtyEl.setAttribute("min", "1");
      inputQtyEl.setAttribute("readonly", "true");
      inputQtyEl.classList.add("product_card_qty_input");
      increaseQty.innerText = "+";
      increaseQty.setAttribute("type", "button");
      increaseQty.classList.add("doner_app_button", "change_qty_btn");
      decreaseQty.innerText = "-";
      decreaseQty.setAttribute("type", "button");
      decreaseQty.classList.add("doner_app_button", "change_qty_btn");
      addBtnEl.setAttribute("type", "button");
      addBtnEl.innerText = "Add to Cart";
      addBtnEl.classList.add("doner_app_button", "add_to_cart_btn");
      detailsBtnEl.innerText = "Details";
      detailsBtnEl.classList.add("doner_app_button", "product_details_btn");
      productFooterDivEl.classList.add("card-footer", "product_card_footer");
      increaseQty.addEventListener("click", () => {
        this._increaseQtyHandler(inputQtyEl);
      });
      decreaseQty.addEventListener("click", () => {
        this._decreaseQtyHandler(inputQtyEl);
      });
      detailsBtnEl.addEventListener("click", () => {
        this._changeUrlToDetails(product.id);
      });
      productBodyDivEl.append(weightParaEl, categoryParaEl, priceParaEl);
      changeQtyDivEl.append(increaseQty, decreaseQty);
      productFooterDivEl.append(
        inputQtyEl,
        changeQtyDivEl,
        addBtnEl,
        detailsBtnEl
      );
      productDivEl.append(figEl, productBodyDivEl, productFooterDivEl);
      return productDivEl;
    });
  }
}
export default new ProductsView();

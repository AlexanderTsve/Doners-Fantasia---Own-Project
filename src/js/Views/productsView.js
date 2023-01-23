import View from "./View.js";
class ProductsView extends View {
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
      const addBtnEl = document.createElement("button");
      const detailsBtnEl = document.createElement("button");

      productDivEl.classList.add("card", "text-center");
      productDivEl.classList.add("product_card");
      figEl.classList.add("product_card_header");
      imageEl.classList.add("loading", "card-img-top", "product_card_img");
      imageEl.src = product.imgSrc;
      this._renderInternalSpinner(figEl);

      imageEl.addEventListener("load", function () {
        figEl.innerHTML = "";
        figEl.append(imageEl, nameEl);
        imageEl.classList.remove("loading");
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
      inputQtyEl.classList.add("product_card_qty_input");
      addBtnEl.setAttribute("type", "submit");
      addBtnEl.innerText = "Add to Cart";
      addBtnEl.classList.add("doner_app_button");
      detailsBtnEl.innerText = "Details";
      detailsBtnEl.classList.add("doner_app_button");
      productFooterDivEl.classList.add("card-footer", "product_card_footer");

      detailsBtnEl.addEventListener("click", function () {
        window.location.pathname = `/details-page/${product.id}`;
      });

      productBodyDivEl.append(weightParaEl, categoryParaEl, priceParaEl);
      productFooterDivEl.append(inputQtyEl, addBtnEl, detailsBtnEl);
      productDivEl.append(figEl, productBodyDivEl, productFooterDivEl);
      return productDivEl;
    });
  }
}
export default new ProductsView();

import * as images from "../../img/products_imgs/*.png";
import * as icons from "../../img/weight_price_icons/*.png";
import View from "./View.js";
class ProductDetailsView extends View {
  _parentElement = document.querySelector(".product-details");
  render(data) {
    if (!data) {
      return this.renderError();
    }
    this._data = data;
    const markupArr = this._generateMarkupArr();
    this._clear();
    markupArr.forEach((markup) => this._parentElement.append(markup));
  }

  _generateMarkupArr() {
    const productImageNameDivEl = document.createElement("div");
    const figDetailsEl = document.createElement("figure");
    const imageDetailsEl = document.createElement("img");
    const nameDetailsEl = document.createElement("h4");
    const productAllDetailsDivEl = document.createElement("div");
    const weightVolumeDetailsDivEl = document.createElement("div");
    const weightVolumeIcon = document.createElement("img");
    const weightVolumeSpan = document.createElement("span");
    const priceDetailsDivEl = document.createElement("div");
    const priceIcon = document.createElement("img");
    const priceSpan = document.createElement("span");
    const addBtnDetailsEl = document.createElement("button");

    nameDetailsEl.innerText =
      this._data.category !== "Drink"
        ? this._data.name
        : this._data.name.split("(")[0];
    nameDetailsEl.classList.add("product-details-name", "card-body");
    if (this._data.content) {
      const productContentDivEl = document.createElement("div");
      const productContentListEl = document.createElement("ul");
      productContentListEl.classList.add(
        "list-group-numbered",
        "product-details-content"
      );
      const contentTitle = document.createElement("h5");
      contentTitle.innerText = "Content:";
      contentTitle.classList.add("product-details-font");
      productContentDivEl.append(contentTitle);
      this._data.content.forEach((ingredient) => {
        const ingredientItem = document.createElement("li");
        ingredientItem.innerText = ingredient;
        ingredientItem.classList.add("list-group-item");
        productContentListEl.append(ingredientItem);
        productContentDivEl.append(productContentListEl);
      });
      productAllDetailsDivEl.append(productContentDivEl);
    }

    imageDetailsEl.classList.add(
      "product-details-image",
      "loading",
      "card-img-top"
    );
    figDetailsEl.classList.add("product-details-figure");
    imageDetailsEl.src = `${images[this._data.imgIdentifier]}.png`;
    this._renderInternalSpinner(figDetailsEl);

    imageDetailsEl.addEventListener("load", function () {
      figDetailsEl.innerHTML = "";
      figDetailsEl.append(imageDetailsEl, nameDetailsEl);
      imageDetailsEl.classList.remove("loading");
    });

    weightVolumeDetailsDivEl.classList.add("product-details-weight");
    priceDetailsDivEl.classList.add("product-details-price");
    weightVolumeIcon.src =
      this._data.category !== "Drink"
        ? `${icons.weight_gram_icon}.png`
        : `${icons.litre_volume}.png`;
    weightVolumeIcon.classList.add("icon_weight", "icon");
    weightVolumeSpan.innerText =
      this._data.category !== "Drink"
        ? `${this._data.weight} gr`
        : this._data.name.split("(")[1].slice(0, -1);
    weightVolumeSpan.classList.add("product-details-font");
    priceIcon.classList.add("icon_price", "icon");
    priceIcon.src = `${icons.price_icon}.png`;
    priceSpan.innerText = `${Number(this._data.price).toFixed(2)} BGN`;
    priceSpan.classList.add("product-details-font");
    productImageNameDivEl.classList.add("card", "w-50", "text-center");
    productAllDetailsDivEl.classList.add("product-details-body");
    addBtnDetailsEl.innerText = "Add to Cart";
    addBtnDetailsEl.classList.add("doner_app_button");

    productImageNameDivEl.append(figDetailsEl);
    weightVolumeDetailsDivEl.append(weightVolumeIcon, weightVolumeSpan);
    priceDetailsDivEl.append(priceIcon, priceSpan);
    productAllDetailsDivEl.append(
      weightVolumeDetailsDivEl,
      priceDetailsDivEl,
      addBtnDetailsEl
    );
    return [productImageNameDivEl, productAllDetailsDivEl];
  }
}
export default new ProductDetailsView();

import * as images from "../../img/products_imgs/*.png";
import * as icons from "../../img/weight_price_icons/*.png";
import Views from "./Views.js";
import { GENERAL_ERR_MSG_PROBLEM_WITH_DATA, PRODUCT_ITEM } from "../config.js";
/**
 * Renders the product details page for the respective product.
 */
class ProductDetailsView extends Views {
  _parentElement = document.querySelector(".product-details");
  /**
   * Renders the correct information for each product on the product details page.
   * @param {object} data contains all of the data regarding the respective product.
   * @returns {string} an error message if there has been a problem with the data.
   */
  render(data) {
    if (!data || Object.values(data).length === 0) {
      return this.renderError(GENERAL_ERR_MSG_PROBLEM_WITH_DATA);
    }
    this._data = data;
    const markupArr = this._generateMarkup();
    this._clear();
    markupArr.forEach((markup) => this._parentElement.append(markup));
  }
  /**
   * Handles the adding of one unit of a product to the cart.
   * @callback addOneItemFromDetailsHandler
   * @param {object} obj to be added to cart.
   */
  /**
   * Listens for the 'click' event and attaches a handler on the "Add 1 Item" button.
   * @param {addOneItemFromDetailsHandler} handler Callback for adding of one unit of a product to the cart attached to the button.
   */
  addToCartHandler(handler) {
    document
      .querySelector(".details_page_add_to_cart_btn")
      .addEventListener("click", (e) => {
        const name =
          e.target.parentElement.parentElement.firstChild.lastChild.innerText;
        let price;
        price = e.target.parentElement.classList.contains(
          "product-details-drinks"
        )
          ? Number(
              e.target.parentElement.children[1].lastChild.innerText.split(
                " "
              )[0]
            )
          : Number(
              e.target.parentElement.children[2].lastChild.innerText.split(
                " "
              )[0]
            );
        const obj = {
          name,
          price,
          qty: PRODUCT_ITEM,
        };
        handler(obj);
      });
  }
  /**
   * Generates an array of two elements - one with an image and a title of the product, another with a list of ingredients.
   * @returns {HTMLElement} - array of two DOM elements.
   */
  _generateMarkup() {
    const productImageNameDivEl = document.createElement("div");
    const figDetailsEl = document.createElement("figure");
    const imageDetailsEl = document.createElement("img");
    const nameDetailsEl = document.createElement("h5");
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
      const contentTitle = document.createElement("h6");
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
    this._data.category === "Drink"
      ? productAllDetailsDivEl.classList.add("product-details-drinks")
      : productAllDetailsDivEl.classList.add("product-details-body");
    addBtnDetailsEl.innerText = "Add 1 to Cart";
    addBtnDetailsEl.classList.add(
      "doner_app_button",
      "details_page_add_to_cart_btn"
    );
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

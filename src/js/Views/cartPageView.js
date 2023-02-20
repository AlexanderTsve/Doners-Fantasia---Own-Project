import Views from "./Views.js";
class CartPageView extends Views {
  _parentElement = document.querySelector(".cart-container");
  _formElement = document.querySelector(".order-form-container");
  render(data) {
    const totalCountEl = document.querySelector(".cart-items-count");
    if (!data || data.length === 0) {
      this._parentElement.innerText = "No products in the cart!";
      this._formElement.innerHTML = "";
      totalCountEl.innerText = 0;
      return;
    }
    this._data = data;
    const markupArr = this._generateMarkupArr(this._data);
    this._clear();
    markupArr.forEach((element) => {
      this._parentElement.append(element);
    });
    this._parentElement.append(this._renderTotalAmount(this._data));
    totalCountEl.innerText = data.reduce((acc, product) => {
      return (acc += Number(product.qty));
    }, 0);
    this._renderOrderForm();
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
        const price =
          Math.round(
            Number(
              e.target.parentElement.firstChild.innerText
                .split(",")[2]
                .split(":")[1]
                .slice(1)
                .split(" ")[0]
            ) * 100
          ) / 100;
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
        const price =
          Math.round(
            Number(
              e.target.parentElement.firstChild.innerText
                .split(",")[2]
                .split(":")[1]
                .slice(1)
                .split(" ")[0]
            ) * 100
          ) / 100;
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
  toggleOrderBtnDisabledAttr(bool) {
    const orderBtn = document.querySelector(".order_form_btn");
    if (!orderBtn) {
      return;
    }
    if (bool) {
      orderBtn.disabled = false;
    }
    if (!bool) {
      orderBtn.disabled = true;
    }
  }
  addOrderFormInputHandler(validationFn, checkLoginAndOrderFormDataFn, idEnd) {
    document
      .getElementById(`order_form_${idEnd}`)
      .addEventListener("input", (e) => {
        validationFn(e.target.value);
        const bool = checkLoginAndOrderFormDataFn();
        this.toggleOrderBtnDisabledAttr(bool);
      });
  }
  errorParaHandler(classIdent, msg) {
    document.querySelector(`.order_form_${classIdent}_error`).innerText = msg;
  }
  clearErrorParaHandler(classIdent) {
    document.querySelector(`.order_form_${classIdent}_error`).innerText = "";
  }
  _renderOrderForm() {
    if (!this._formElement.hasChildNodes()) {
      const formMarkup = this._generateOrderForm();
      this._formElement.append(formMarkup);
    }
  }
  _renderTotalAmount(arrOfProducts) {
    const totalPrice = arrOfProducts.reduce((acc, product) => {
      return (acc += Number(product.price));
    }, 0);
    const pricePara = document.createElement("p");
    pricePara.innerText = `Total Price: ${(
      Math.round(totalPrice * 100) / 100
    ).toFixed(2)} BGN`;
    pricePara.classList.add("cart-container-para");
    return pricePara;
  }
  _generateOrderForm() {
    const orderFormDivEl = document.createElement("form");
    const orderFormNamesLabelEl = document.createElement("label");
    const orderFormNamesInputEl = document.createElement("input");
    const orderFormNamesErrorPara = document.createElement("p");
    const orderFormAddressLabelEl = document.createElement("label");
    const orderFormAddressInputEl = document.createElement("input");
    const orderFormAddressErrorPara = document.createElement("p");
    const orderFormPhoneLabelEl = document.createElement("label");
    const orderFormPhoneInputEl = document.createElement("input");
    const orderFormPhoneErrorPara = document.createElement("p");
    const orderFormEmailLabelEl = document.createElement("label");
    const orderFormEmailInputEl = document.createElement("input");
    const orderFormEmailErrorPara = document.createElement("p");
    const orderBtnDivEl = document.createElement("div");
    const orderFormBtn = document.createElement("button");
    const tooltipDivEl = document.createElement("div");
    orderFormDivEl.id = "order_form";
    orderFormNamesLabelEl.setAttribute("for", "order_form_names");
    orderFormNamesLabelEl.innerText = "First and Last Name:";
    orderFormNamesInputEl.setAttribute("type", "text");
    orderFormNamesInputEl.id = "order_form_names";
    orderFormNamesInputEl.setAttribute("required", "");
    orderFormNamesErrorPara.classList.add("order_form_names_error");
    orderFormAddressLabelEl.setAttribute("for", "order_form_address");
    orderFormAddressLabelEl.innerText = "Address:";
    orderFormAddressInputEl.setAttribute("type", "text");
    orderFormAddressInputEl.id = "order_form_address";
    orderFormAddressInputEl.setAttribute("required", "");
    orderFormAddressErrorPara.classList.add("order_form_address_error");
    orderFormPhoneLabelEl.setAttribute("for", "order_form_phone");
    orderFormPhoneLabelEl.innerText = "Phone:";
    orderFormPhoneInputEl.setAttribute("type", "tel");
    orderFormPhoneInputEl.id = "order_form_phone";
    orderFormPhoneInputEl.setAttribute("required", "");
    orderFormPhoneErrorPara.classList.add("order_form_phone_error");
    orderFormEmailLabelEl.setAttribute("for", "order_form_email");
    orderFormEmailLabelEl.innerText = "Email:";
    orderFormEmailInputEl.setAttribute("type", "email");
    orderFormEmailInputEl.id = "order_form_email";
    orderFormEmailInputEl.setAttribute("required", "");
    orderFormEmailErrorPara.classList.add("order_form_email_error");
    orderFormBtn.innerText = "Order";
    orderFormBtn.setAttribute("type", "submit");
    orderFormBtn.setAttribute("disabled", "");
    orderFormBtn.classList.add("doner_app_button", "order_form_btn");
    tooltipDivEl.innerText = "Please, log in and fill in the form!";
    tooltipDivEl.classList.add("order-tooltip-text");
    orderBtnDivEl.classList.add("order-tooltip");
    orderBtnDivEl.append(tooltipDivEl, orderFormBtn);
    orderFormDivEl.append(
      orderFormNamesLabelEl,
      orderFormNamesInputEl,
      orderFormNamesErrorPara,
      orderFormAddressLabelEl,
      orderFormAddressInputEl,
      orderFormAddressErrorPara,
      orderFormPhoneLabelEl,
      orderFormPhoneInputEl,
      orderFormPhoneErrorPara,
      orderFormEmailLabelEl,
      orderFormEmailInputEl,
      orderFormEmailErrorPara,
      orderBtnDivEl
    );
    return orderFormDivEl;
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

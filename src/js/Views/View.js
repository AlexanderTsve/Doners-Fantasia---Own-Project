import * as alertIcon from "../../img/icons/*.png";
export default class View {
  _data;
  renderSpinner() {
    const markup = `<div class='spinner'></div>`;
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  renderError(message) {
    const divIconEl = document.createElement("div");
    const iconAlertEl = document.createElement("img");
    const paraErrorMessage = document.createElement("p");
    const markup = document.createElement("div");
    iconAlertEl.src = `${alertIcon.error}.png`;
    paraErrorMessage.innerText = message;
    markup.classList.add("error");
    divIconEl.append(iconAlertEl);
    markup.append(divIconEl, paraErrorMessage);
    this._clear();
    this._parentElement.append(markup);
  }
  addHideModalHandler(handlerModalHiding) {
    document.addEventListener("click", function (e) {
      if (
        e.target.matches(".modal_message-content_close") ||
        e.target.matches(".message_cancel_btn") ||
        e.target.closest(".modal_message")
      ) {
        handlerModalHiding();
      }
    });
  }
  hideModal() {
    const modal = document.querySelector(".modal_message");
    modal.remove();
  }
  showModal(text, divEl) {
    const markup = this._generateMessageModalHtml(text);
    document.getElementById(divEl).append(markup);
  }
  _clear() {
    this._parentElement.innerHTML = "";
  }
  _renderInternalSpinner = (parentEl) => {
    const markup = `<div class='spinner'></div>`;
    parentEl.innerHTML = "";
    parentEl.insertAdjacentHTML("afterbegin", markup);
  };
  _generateMessageModalHtml(text) {
    const modalDiv = document.createElement("div");
    const modalContentForm = document.createElement("form");
    const modalCloseSpan = document.createElement("span");
    const brEl = document.createElement("br");
    const modalContentContainer = document.createElement("div");
    const modalTextPara = document.createElement("p");
    const modalBtnDiv = document.createElement("div");
    const okBtn = document.createElement("button");
    modalCloseSpan.innerHTML = "&times";
    modalTextPara.innerText = text;
    okBtn.innerText = "Ok";
    okBtn.setAttribute("type", "button");
    modalDiv.classList.add("modal", "modal_message");
    modalContentForm.classList.add("modal_message-content");
    modalCloseSpan.classList.add("modal_message-content_close");
    modalContentContainer.classList.add("modal_message-content_container");
    okBtn.classList.add("doner_app_button", "message_cancel_btn");
    modalBtnDiv.append(okBtn);
    modalContentContainer.append(modalTextPara, modalBtnDiv);
    modalContentForm.append(modalCloseSpan, brEl, modalContentContainer);
    modalDiv.append(modalContentForm);
    return modalDiv;
  }
}

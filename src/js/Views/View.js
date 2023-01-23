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
  _clear() {
    this._parentElement.innerHTML = "";
  }

  _renderInternalSpinner = (parentEl) => {
    const markup = `<div class='spinner'></div>`;
    parentEl.innerHTML = "";
    parentEl.insertAdjacentHTML("afterbegin", markup);
  };
}

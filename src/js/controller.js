import * as bootstrap from "bootstrap";
import * as images from "../img/products_imgs/*.png";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { HASH_ARR } from "./config.js";
import { async } from "regenerator-runtime";
// import { v4 as uuidv4 } from "uuid";
// const DATA = [
//   {
//     category: "Doner",
//     name: "Doner Roller",
//     price: 6.99,
//     weight: 500,
//     imgIdentifier: "roller",
//     productId: uuidv4(),
//   },

//   {
//     category: "Doner",
//     name: "Chicken Doner Light",
//     price: 4.4,
//     weight: 250,
//     imgIdentifier: "chicken_light",
//     productId: uuidv4(),
//   },
//   {
//     category: "Doner",
//     name: "Chicken Doner Classic",
//     price: 6.2,
//     weight: 350,
//     imgIdentifier: "chicken_classic",
//     productId: uuidv4(),
//   },
//   {
//     category: "Doner",
//     name: "Chicken Doner Grand",
//     price: 7.4,
//     weight: 500,
//     imgIdentifier: "chicken_grand",
//     productId: uuidv4(),
//   },
//   {
//     category: "Doner",
//     name: "Doner box",
//     price: 6.99,
//     weight: 400,
//     imgIdentifier: "box",
//     productId: uuidv4(),
//   },
//   {
//     category: "Doner",
//     name: "Chicken Doner Portion",
//     price: 6.99,
//     weight: 600,
//     imgIdentifier: "chicken_doner_portion",
//     productId: uuidv4(),
//   },
//   {
//     category: "Doner",
//     name: "Chicken Doner Portion (with rice)",
//     price: 8.99,
//     weight: 700,
//     imgIdentifier: "chicken_doner_portion_with_rice",
//     productId: uuidv4(),
//   },
//   {
//     category: "Doner",
//     name: "Veggie Doner Classic",
//     price: 4.9,
//     weight: 350,
//     imgIdentifier: "veggie_doner",
//     productId: uuidv4(),
//   },
//   {
//     category: "Doner",
//     name: "Beef Doner Light",
//     price: 4.6,
//     weight: 250,
//     imgIdentifier: "beef_doner_light",
//     productId: uuidv4(),
//   },
//   {
//     category: "Doner",
//     name: "Beef Doner Classic",
//     price: 6.4,
//     weight: 350,
//     imgIdentifier: "beef_doner_classic",
//     productId: uuidv4(),
//   },
//   {
//     category: "Doner",
//     name: "Beef Doner Grand",
//     price: 7.6,
//     weight: 500,
//     imgIdentifier: "beef_doner_grand",
//     productId: uuidv4(),
//   },
//   {
//     category: "Doner",
//     name: "Beef Doner Portion",
//     price: 7.49,
//     weight: 600,
//     imgIdentifier: "beef_doner_portion",
//     productId: uuidv4(),
//   },
//   {
//     category: "Doner",
//     name: "Beef Doner Portion (with rice)",
//     price: 9.2,
//     weight: 700,
//     imgIdentifier: "beef_doner_portion_with_rice",
//     productId: uuidv4(),
//   },
//   {
//     category: "Doner",
//     name: "Beef Doner Portion (with fries)",
//     price: 10.2,
//     weight: 700,
//     imgIdentifier: "beef_doner_portion_with_fries",
//     productId: uuidv4(),
//   },
//   {
//     category: "Doner",
//     name: "Sudju",
//     price: 4.9,
//     weight: 400,
//     imgIdentifier: "sudju",
//     productId: uuidv4(),
//   },
//   {
//     category: "Burger",
//     name: "Burger with Chicken Doner Meat (with fries)",
//     price: 9.49,
//     weight: 350,
//     imgIdentifier: "burger_chicken_doner_meat_with_fries",
//     productId: uuidv4(),
//   },
//   {
//     category: "Burger",
//     name: "Burger with Beef Doner Meat (with fries)",
//     price: 9.99,
//     weight: 350,
//     imgIdentifier: "burger_beef_doner_meat_with_fries",
//     productId: uuidv4(),
//   },
//   {
//     category: "Burger",
//     name: "Hard Burger",
//     price: 9.49,
//     weight: 350,
//     imgIdentifier: "hard_burger",
//     productId: uuidv4(),
//   },
//   {
//     category: "Burger",
//     name: "Beef Burger",
//     price: 8.99,
//     weight: 350,
//     imgIdentifier: "beef_burger",
//     productId: uuidv4(),
//   },
//   {
//     category: "Burger",
//     name: "Chicken Burger Double",
//     price: 11.19,
//     weight: 450,
//     imgIdentifier: "chicken_burger_double",
//     productId: uuidv4(),
//   },
//   {
//     category: "Burger",
//     name: "Chicken Burger Classic",
//     price: 9.99,
//     weight: 350,
//     imgIdentifier: "chicken_burger_classic",
//     productId: uuidv4(),
//   },
//   {
//     category: "Burger",
//     name: "Veggie Burger",
//     price: 4.49,
//     weight: 350,
//     imgIdentifier: "veggie_burger",
//     productId: uuidv4(),
//   },
//   {
//     category: "Burger",
//     name: "Pop Burger",
//     price: 5.99,
//     weight: 200,
//     imgIdentifier: "pop_burger",
//     productId: uuidv4(),
//   },
//   {
//     category: "Pizza",
//     name: "Pizza Margarita",
//     price: 5.99,
//     weight: 500,
//     imgIdentifier: "margarita",
//     productId: uuidv4(),
//   },
//   {
//     category: "Pizza",
//     name: "Pizza Napolitana",
//     price: 10.99,
//     weight: 500,
//     imgIdentifier: "napolitana",
//     productId: uuidv4(),
//   },
//   {
//     category: "Pizza",
//     name: "Pizza Assorti",
//     price: 11.99,
//     weight: 500,
//     imgIdentifier: "assorti",
//     productId: uuidv4(),
//   },
//   {
//     category: "Pizza",
//     name: "Pizza Hot-dog",
//     price: 8.99,
//     weight: 500,
//     imgIdentifier: "hot-dog",
//     productId: uuidv4(),
//   },
//   {
//     category: "Pizza",
//     name: "Pizza Pepperoni",
//     price: 12.99,
//     weight: 500,
//     imgIdentifier: "peperoni",
//     productId: uuidv4(),
//   },
//   {
//     category: "Pizza",
//     name: "Pizza Carbonarra",
//     price: 10.99,
//     weight: 500,
//     imgIdentifier: "carbonarra",
//     productId: uuidv4(),
//   },
//   {
//     category: "Pizza",
//     name: "Pizza Polo",
//     price: 11.99,
//     weight: 500,
//     imgIdentifier: "polo",
//     productId: uuidv4(),
//   },
//   {
//     category: "Pizza",
//     name: "Pizza Caprichoza",
//     price: 9.99,
//     weight: 500,
//     imgIdentifier: "caprichoza",
//     productId: uuidv4(),
//   },
//   {
//     category: "Drink",
//     name: "Pepsi (2l)",
//     price: 3.99,
//     imgIdentifier: "pepsi_2l",
//     productId: uuidv4(),
//   },
//   {
//     category: "Drink",
//     name: "Pepsi (500ml)",
//     price: 2.19,
//     imgIdentifier: "pepsi_500ml",
//     productId: uuidv4(),
//   },
//   {
//     category: "Drink",
//     name: "Mirinda (500ml)",
//     price: 2.19,
//     imgIdentifier: "mirinda_500ml",
//     productId: uuidv4(),
//   },
//   {
//     category: "Drink",
//     name: "Mirinda (2l)",
//     price: 3.99,
//     imgIdentifier: "mirinda_2l",
//     productId: uuidv4(),
//   },
//   {
//     category: "Drink",
//     name: "Ayran Fantasia (500ml)",
//     price: 2.19,
//     imgIdentifier: "ayryan_500ml",
//     productId: uuidv4(),
//   },
//   {
//     category: "Drink",
//     name: "Ayran Fantasia (250ml)",
//     price: 1.5,
//     imgIdentifier: "ayryan_250ml",
//     productId: uuidv4(),
//   },
//   {
//     category: "Drink",
//     name: "Mineral Water (500ml)",
//     price: 1.2,
//     imgIdentifier: "min_water_500ml",
//     productId: uuidv4(),
//   },
// ];

// const sendProducts = async () => {
//   const sendData = await fetch(
//     "https://react-http-requests-81638-default-rtdb.europe-west1.firebasedatabase.app/doners-products.json",
//     {
//       method: "POST",
//       body: JSON.stringify(DATA),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   await sendData();
// };
// sendProducts();

// ---------------
let debounceTimer;
const productsContainer = document.querySelector(".products-container");
const searchField = document.querySelector(".search-input-field");
const dropdownComponent = document.getElementById("category");

const debounce = (callback, time) => {
  window.clearTimeout(debounceTimer);
  debounceTimer = window.setTimeout(callback, time);
};

const renderSpinner = (parentEl) => {
  const markup = `<div class='spinner'></div>`;
  parentEl.innerHTML = "";
  parentEl.insertAdjacentHTML("afterbegin", markup);
};

const renderMessage = (parentEl, searchQuote) => {
  const markup = `<p>There are no products with "${searchQuote}" in their name!</p>`;
  parentEl.innerHTML = "";
  parentEl.insertAdjacentHTML("afterbegin", markup);
};
const renderProducts = (arrOfProducts) => {
  arrOfProducts.forEach((product) => {
    const productDivEl = document.createElement("div");
    const figEl = document.createElement("figure");
    const imageEl = document.createElement("img");
    const nameEl = document.createElement("h5");
    const productBodyDivEl = document.createElement("div");
    const weightParaEl = document.createElement("p");
    const categoryParaEl = document.createElement("p");
    const productFooterDivEl = document.createElement("div");
    const inputQtyEl = document.createElement("input");
    const addBtnEl = document.createElement("button");
    const detailsBtnEl = document.createElement("button");

    productDivEl.classList.add("card", "text-center");
    productDivEl.classList.add("product_card");
    figEl.classList.add("product_card_header");
    imageEl.classList.add("loading", "card-img-top", "product_card_img");
    imageEl.src = product.imgSrc;
    renderSpinner(figEl);

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
      location.hash = product.id;
    });

    productBodyDivEl.append(weightParaEl, categoryParaEl);
    productFooterDivEl.append(inputQtyEl, addBtnEl, detailsBtnEl);
    productDivEl.append(figEl, productBodyDivEl, productFooterDivEl);
    productsContainer.append(productDivEl);
  });
};

const showProducts = async () => {
  try {
    renderSpinner(productsContainer);
    const response = await fetch(
      "https://react-http-requests-81638-default-rtdb.europe-west1.firebasedatabase.app/doners-products.json"
    );
    if (!response.ok) {
      throw new Error(`Something went wrong! Status: ${response.status}`);
    }
    const data = await response.json();
    const arrOfProducts = Object.values(data)[0].map((product) => {
      return {
        category: product.category,
        name: product.name,
        price: product.price,
        weight: product.weight,
        imgSrc: `${images[product.imgIdentifier]}`,
        id: product.productId,
      };
    });
    productsContainer.innerHTML = "";
    renderProducts(arrOfProducts);
  } catch (err) {
    alert(err);
  }
};
window.addEventListener("load", showProducts);

const eventListening = async () => {
  const searchFieldValue = String(searchField.value);
  const dropdownValue = dropdownComponent.value;
  if (searchFieldValue || dropdownValue !== "none") {
    productsContainer.innerHTML = "";
    try {
      renderSpinner(productsContainer);
      const response = await fetch(
        "https://react-http-requests-81638-default-rtdb.europe-west1.firebasedatabase.app/doners-products.json"
      );
      if (!response.ok) {
        throw new Error(`Something went wrong! Status: ${response.status}`);
      }
      const data = await response.json();
      if (dropdownValue === "none" && searchFieldValue) {
        const arrOfProducts = Object.values(data)[0]
          .filter((product) =>
            product.name.toLowerCase().includes(searchFieldValue.toLowerCase())
          )
          .map((product) => {
            return {
              category: product.category,
              name: product.name,
              price: product.price,
              weight: product.weight,
              imgSrc: `${images[product.imgIdentifier]}`,
              id: product.productId,
            };
          });
        productsContainer.innerHTML = "";
        arrOfProducts.length > 0
          ? renderProducts(arrOfProducts)
          : renderMessage(productsContainer, searchFieldValue);
      }
      if (dropdownValue !== "none" && !searchFieldValue) {
        const arrOfProducts = Object.values(data)[0]
          .filter((product) => product.category.toLowerCase() === dropdownValue)
          .map((product) => {
            return {
              category: product.category,
              name: product.name,
              price: product.price,
              weight: product.weight,
              imgSrc: `${images[product.imgIdentifier]}`,
              id: product.productId,
            };
          });
        productsContainer.innerHTML = "";
        renderProducts(arrOfProducts);
      }
      if (dropdownValue !== "none" && searchFieldValue) {
        const arrOfProducts = Object.values(data)[0]
          .filter(
            (product) =>
              product.name
                .toLowerCase()
                .includes(searchFieldValue.toLowerCase()) &&
              product.category.toLowerCase() === dropdownValue
          )
          .map((product) => {
            return {
              category: product.category,
              name: product.name,
              price: product.price,
              weight: product.weight,
              imgSrc: `${images[product.imgIdentifier]}`,
              id: product.productId,
            };
          });
        productsContainer.innerHTML = "";
        arrOfProducts.length > 0
          ? renderProducts(arrOfProducts)
          : renderMessage(productsContainer, searchFieldValue);
      }
    } catch (err) {
      alert(err);
    }
  } else {
    await showProducts();
  }
};
searchField.addEventListener("input", () => {
  debounce(eventListening, 500);
});

dropdownComponent.addEventListener("change", eventListening);

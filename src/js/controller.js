import * as model from "./model.js";
import productDetailsView from "./Views/productDetailsView.js";
import productsView from "./Views/productsView.js";
import * as bootstrap from "bootstrap";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { URL_ARR } from "./config.js";
import { async } from "regenerator-runtime";
import { v4 as uuidv4 } from "uuid";
import urlView from "./Views/urlView.js";
import searchView from "./Views/searchView.js";
import dropdownFilterView from "./Views/dropdownFilterView.js";
import paginationView from "./Views/paginationView.js";
// const DATA = [
//   {
//     category: "Doner",
//     name: "Doner Roller",
//     price: 6.99,
//     weight: 500,
//     imgIdentifier: "roller",
//     productId: uuidv4(),
//     content: [
//       "Crispy chicken tenders",
//       "Iceberg",
//       "Tomatoes",
//       "Mayonnaise",
//       "Garlic sauce",
//       "Pita bread CLASSIC",
//     ],
//   },

//   {
//     category: "Doner",
//     name: "Chicken Doner Light",
//     price: 4.4,
//     weight: 250,
//     imgIdentifier: "chicken_light",
//     productId: uuidv4(),
//     content: [
//       "Chicken doner meat",
//       "Cabbage",
//       "Lettuce",
//       "Tomatoes",
//       "Cucumbers",
//       "Garlic sauce",
//       "Pita bread CLASSIC",
//     ],
//   },
//   {
//     category: "Doner",
//     name: "Chicken Doner Classic",
//     price: 6.2,
//     weight: 350,
//     imgIdentifier: "chicken_classic",
//     productId: uuidv4(),
//     content: [
//       "Chicken doner meat",
//       "French fries",
//       "Tomatoes",
//       "Pickles",
//       "Garlic sauce",
//       "Pita bread CLASSIC",
//     ],
//   },
//   {
//     category: "Doner",
//     name: "Chicken Doner Grand",
//     price: 7.4,
//     weight: 500,
//     imgIdentifier: "chicken_grand",
//     productId: uuidv4(),
//     content: [
//       "Chicken doner meat",
//       "French fries",
//       "Tomatoes",
//       "Pickles",
//       "Garlic sauce",
//       "Pita bread GRAND",
//     ],
//   },
//   {
//     category: "Doner",
//     name: "Doner box",
//     price: 6.99,
//     weight: 400,
//     imgIdentifier: "box",
//     productId: uuidv4(),
//     content: [
//       "Chicken doner meat",
//       "French fries",
//       "Tomatoes",
//       "Cucumber",
//       "Lettuce",
//       "Red cabbage",
//       "Pickles",
//       "Garlic sauce",
//     ],
//   },
//   {
//     category: "Doner",
//     name: "Chicken Doner Portion",
//     price: 6.99,
//     weight: 600,
//     imgIdentifier: "chicken_doner_portion",
//     productId: uuidv4(),
//     content: [
//       "Chicken doner meat",
//       "French fries",
//       "Tomatoes",
//       "Pickles",
//       "Lettuce",
//       "Cabbage",
//       "Pickles",
//       "Garlic sauce",
//       "Pita bread CLASSIC",
//     ],
//   },
//   {
//     category: "Doner",
//     name: "Chicken Doner Portion (with rice)",
//     price: 8.99,
//     weight: 700,
//     imgIdentifier: "chicken_doner_portion_with_rice",
//     productId: uuidv4(),
//     content: [
//       "Chicken doner meat",
//       "Rice with vegetables",
//       "Tomatoes",
//       "Pickles",
//       "Lettuce",
//       "Cabbage",
//       "Pickles",
//       "Garlic sauce",
//       "Pita bread CLASSIC",
//     ],
//   },
//   {
//     category: "Doner",
//     name: "Veggie Doner Classic",
//     price: 4.9,
//     weight: 350,
//     imgIdentifier: "veggie_doner",
//     productId: uuidv4(),
//     content: [
//       "3 x falafel",
//       "French fries",
//       "Tomatoes",
//       "Cucumber",
//       "Cabbage",
//       "Lettuce",
//       "Garlic sauce",
//       "Pita bread CLASSIC",
//     ],
//   },
//   {
//     category: "Doner",
//     name: "Beef Doner Light",
//     price: 4.6,
//     weight: 250,
//     imgIdentifier: "beef_doner_light",
//     productId: uuidv4(),
//     content: [
//       "Beef doner meat",
//       "Tomatoes",
//       "Pickles",
//       "Red onion",
//       "Parsley",
//       "Milk sauce",
//       "Pita bread CLASSIC",
//     ],
//   },
//   {
//     category: "Doner",
//     name: "Beef Doner Classic",
//     price: 6.4,
//     weight: 350,
//     imgIdentifier: "beef_doner_classic",
//     productId: uuidv4(),
//     content: [
//       "Beef doner meat",
//       "Tomatoes",
//       "Pickles",
//       "Red onion",
//       "Parsley",
//       "Garlic sauce",
//       "Pita bread CLASSIC",
//     ],
//   },
//   {
//     category: "Doner",
//     name: "Beef Doner Grand",
//     price: 7.6,
//     weight: 500,
//     imgIdentifier: "beef_doner_grand",
//     productId: uuidv4(),
//     content: [
//       "Beef doner meat",
//       "Tomatoes",
//       "Pickles",
//       "Red onion",
//       "Parsley",
//       "Garlic sauce",
//       "Pita bread GRAND",
//     ],
//   },
//   {
//     category: "Doner",
//     name: "Beef Doner Portion",
//     price: 7.49,
//     weight: 600,
//     imgIdentifier: "beef_doner_portion",
//     productId: uuidv4(),
//     content: [
//       "Beef doner meat",
//       "Lettuce",
//       "Tomatoes",
//       "Red onion",
//       "Parsley",
//       "Garlic sauce",
//       "Pita bread CLASSIC",
//     ],
//   },
//   {
//     category: "Doner",
//     name: "Beef Doner Portion (with rice)",
//     price: 9.2,
//     weight: 700,
//     imgIdentifier: "beef_doner_portion_with_rice",
//     productId: uuidv4(),
//     content: [
//       "Beef doner meat",
//       "Rice",
//       "Lettuce",
//       "Tomatoes",
//       "Red onion",
//       "Parsley",
//       "Garlic sauce",
//       "Pita bread CLASSIC",
//     ],
//   },
//   {
//     category: "Doner",
//     name: "Beef Doner Portion (with fries)",
//     price: 10.2,
//     weight: 700,
//     imgIdentifier: "beef_doner_portion_with_fries",
//     productId: uuidv4(),
//     content: [
//       "Beef doner meat",
//       "Fries",
//       "Lettuce",
//       "Tomatoes",
//       "Red onion",
//       "Parsley",
//       "Garlic sauce",
//       "Pita bread CLASSIC",
//     ],
//   },
//   {
//     category: "Doner",
//     name: "Sudju",
//     price: 4.9,
//     weight: 400,
//     imgIdentifier: "sudju",
//     productId: uuidv4(),
//     content: [
//       "Chicken mince - spicy",
//       "Fries",
//       "Iceberg",
//       "Tomatoes",
//       "Pickles",
//       "Ketchup",
//       "Garlic sauce",
//       "Arabic bread CLASSIC",
//     ],
//   },
//   {
//     category: "Burger",
//     name: "Burger with Chicken Doner Meat (with fries)",
//     price: 9.49,
//     weight: 350,
//     imgIdentifier: "burger_chicken_doner_meat_with_fries",
//     productId: uuidv4(),
//     content: [
//       "Chicken doner meat",
//       "French fries",
//       "Cabbage",
//       "Lettuce",
//       "Pickles",
//       "Tomatoes",
//       "Garlic sauce",
//       "Ketchup",
//       "Sesame bun",
//     ],
//   },
//   {
//     category: "Burger",
//     name: "Burger with Beef Doner Meat (with fries)",
//     price: 9.99,
//     weight: 350,
//     imgIdentifier: "burger_beef_doner_meat_with_fries",
//     productId: uuidv4(),
//     content: [
//       "Beef doner meat",
//       "Iceberg",
//       "Fresh red onion",
//       "Lettuce",
//       "Pickles",
//       "Tomatoes",
//       "Garlic sauce",
//       "Mayonnaise",
//       "Sesame bun",
//     ],
//   },
//   {
//     category: "Burger",
//     name: "Hard Burger",
//     price: 9.49,
//     weight: 350,
//     imgIdentifier: "hard_burger",
//     productId: uuidv4(),
//     content: ["Chicken fillet", "Tomatoes", "Iceberg", "Mayonnaise"],
//   },
//   {
//     category: "Burger",
//     name: "Beef Burger",
//     price: 8.99,
//     weight: 350,
//     imgIdentifier: "beef_burger",
//     productId: uuidv4(),
//     content: [
//       "Beef patty",
//       "Iceberg",
//       "Fresh red onion",
//       "Pickles",
//       "Tomatoes",
//       "Garlic sauce",
//       "Mayonnaise",
//       "Sesame bun",
//     ],
//   },
//   {
//     category: "Burger",
//     name: "Chicken Burger Double",
//     price: 11.19,
//     weight: 450,
//     imgIdentifier: "chicken_burger_double",
//     productId: uuidv4(),
//     content: [
//       "2 x Chicken patty",
//       "Fries",
//       "Lettuce",
//       "Cabbage",
//       "Cucumber",
//       "Tomatoes",
//       "Garlic sauce",
//       "Ketchup",
//       "Sesame bun",
//     ],
//   },
//   {
//     category: "Burger",
//     name: "Chicken Burger Classic",
//     price: 9.99,
//     weight: 350,
//     imgIdentifier: "chicken_burger_classic",
//     productId: uuidv4(),
//     content: [
//       "Chicken patty",
//       "Fries",
//       "Lettuce",
//       "Cabbage",
//       "Cucumber",
//       "Tomatoes",
//       "Garlic sauce",
//       "Ketchup",
//       "Sesame bun",
//     ],
//   },
//   {
//     category: "Burger",
//     name: "Veggie Burger",
//     price: 4.49,
//     weight: 350,
//     imgIdentifier: "veggie_burger",
//     productId: uuidv4(),
//     content: [
//       "Fried egg",
//       "Cheese toast",
//       "Fries",
//       "Lettuce",
//       "Cabbage",
//       "Cucumber",
//       "Tomatoes",
//       "Pickles",
//       "Garlic sauce",
//       "Ketchup",
//       "Sesame bun",
//     ],
//   },
//   {
//     category: "Burger",
//     name: "Pop Burger",
//     price: 5.99,
//     weight: 200,
//     imgIdentifier: "pop_burger",
//     productId: uuidv4(),
//     content: [
//       "Chicken patty",
//       "Pickles",
//       "Baked onion",
//       "Garlic sauce",
//       "Ketchup",
//       "Bun",
//     ],
//   },
//   {
//     category: "Pizza",
//     name: "Pizza Margarita",
//     price: 5.99,
//     weight: 500,
//     imgIdentifier: "margarita",
//     productId: uuidv4(),
//     content: ["Cheese", "Tomato sauce", "Tomatoes", "Savory"],
//   },
//   {
//     category: "Pizza",
//     name: "Pizza Assorti",
//     price: 11.99,
//     weight: 500,
//     imgIdentifier: "assorti",
//     productId: uuidv4(),
//     content: [
//       "Beef Sausage",
//       "Beef Salami",
//       "Chicken fillet",
//       "Cheese",
//       "Melted cheese",
//       "Mushrooms",
//       "Chopped tomatoes",
//       "Olives",
//       "Tomato sauce",
//       "Savory",
//     ],
//   },
//   {
//     category: "Pizza",
//     name: "Pizza Hot-dog",
//     price: 8.99,
//     weight: 500,
//     imgIdentifier: "hot-dog",
//     productId: uuidv4(),
//     content: [
//       "Chicken Hot-Dog sausage",
//       "Cheese",
//       "Melted cheese",
//       "Tomato sauce",
//       "Savory",
//     ],
//   },
//   {
//     category: "Pizza",
//     name: "Pizza Pepperoni",
//     price: 12.99,
//     weight: 500,
//     imgIdentifier: "peperoni",
//     productId: uuidv4(),
//     content: ["Pepperoni", "Cheese", "Melted cheese", "Tomato sauce", "Savory"],
//   },
//   {
//     category: "Pizza",
//     name: "Pizza Carbonarra",
//     price: 10.99,
//     weight: 500,
//     imgIdentifier: "carbonarra",
//     productId: uuidv4(),
//     content: [
//       "Chicken Ham",
//       "Cheese",
//       "Melted cheese",
//       "Tomato sauce",
//       "Savory",
//     ],
//   },
//   {
//     category: "Pizza",
//     name: "Pizza Polo",
//     price: 11.99,
//     weight: 500,
//     imgIdentifier: "polo",
//     productId: uuidv4(),
//     content: [
//       "Chicken Ham",
//       "Corn",
//       "Pickles",
//       "Peppers",
//       "Cheese",
//       "Tomato sauce",
//       "Savory",
//     ],
//   },
//   {
//     category: "Pizza",
//     name: "Pizza Caprichoza",
//     price: 9.99,
//     weight: 500,
//     imgIdentifier: "caprichoza",
//     productId: uuidv4(),
//     content: ["Chicken fillet", "Cheese", "Tomato sauce", "Savory"],
//   },
//   {
//     category: "Drink",
//     name: "Pepsi (2l)",
//     price: 3.99,
//     imgIdentifier: "pepsi_2l",
//     productId: uuidv4(),
//     content: [],
//   },
//   {
//     category: "Drink",
//     name: "Pepsi (500ml)",
//     price: 2.19,
//     imgIdentifier: "pepsi_500ml",
//     productId: uuidv4(),
//     content: [],
//   },
//   {
//     category: "Drink",
//     name: "Mirinda (500ml)",
//     price: 2.19,
//     imgIdentifier: "mirinda_500ml",
//     productId: uuidv4(),
//     content: [],
//   },
//   {
//     category: "Drink",
//     name: "Mirinda (2l)",
//     price: 3.99,
//     imgIdentifier: "mirinda_2l",
//     productId: uuidv4(),
//     content: [],
//   },
//   {
//     category: "Drink",
//     name: "Ayran Fantasia (500ml)",
//     price: 2.19,
//     imgIdentifier: "ayryan_500ml",
//     productId: uuidv4(),
//     content: [],
//   },
//   {
//     category: "Drink",
//     name: "Ayran Fantasia (250ml)",
//     price: 1.5,
//     imgIdentifier: "ayryan_250ml",
//     productId: uuidv4(),
//     content: [],
//   },
//   {
//     category: "Drink",
//     name: "Mineral Water (500ml)",
//     price: 1.2,
//     imgIdentifier: "min_water_500ml",
//     productId: uuidv4(),
//     content: [],
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
const clearDropdownAndSearchField = () => {
  dropdownFilterView.clearValue();
  searchView.clearSearchValue();
};
const controlProductDetails = async (productId) => {
  try {
    productDetailsView.renderSpinner();
    await model.loadProductDetails(productId);
    if (!model.state.productDetails) {
      throw new Error("There is no existing product with such ID!");
    }
    productDetailsView.render(model.state.productDetails);
  } catch (err) {
    productDetailsView.renderError(err.message);
  }
};

const controlProducts = async () => {
  try {
    productsView.renderSpinner();
    await model.loadProducts();
    if (
      !model.state.products.every(Boolean) ||
      model.state.products.length === 0
    ) {
      throw new Error("One or more of the products do not exist!");
    }
    productsView.render(model.getProductsPage());
    paginationView.render(model.state);
  } catch (err) {
    productsView.renderError(err.message);
  }
};

const controlUrlChange = () => {
  clearDropdownAndSearchField();
  const pathname = window.location.pathname;
  if (
    URL_ARR.every((path) => path !== pathname) &&
    !pathname.includes("details-page")
  ) {
    window.location.href += "menu-page";
  }
  if (URL_ARR.some((path) => path === pathname)) {
    const currentPage = document.getElementById(
      pathname.split("/").join("").trim()
    );
    currentPage.classList.remove("hidden");
    if (pathname === "/menu-page") {
      controlProducts();
    }
  }
  if (pathname.includes("details-page")) {
    const detailsPage = document.getElementById("details-page");
    detailsPage.classList.remove("hidden");
    controlProductDetails(pathname.replace("/details-page/", ""));
  }
};

const controlUrlChangeToMain = () => {
  window.location.pathname = "/menu-page";
};

const controlSearchResults = async () => {
  try {
    const query = searchView.getQuery();
    const dropdownValue = dropdownFilterView.getDropdownValue();
    productsView.renderSpinner();
    await model.loadSearchResults(query, dropdownValue);
    if (
      !model.state.products.every(Boolean) ||
      model.state.products.length === 0
    ) {
      throw new Error(
        `There is no existing product with ${query} in its name!`
      );
    }
    productsView.render(model.getProductsPage());
    paginationView.render(model.state);
  } catch (err) {
    productsView.renderError(err.message);
  }
};

const controlPagination = function (goToPage) {
  productsView.render(model.getProductsPage(goToPage));
  paginationView.render(model.state);
};

const init = () => {
  urlView.addUrlChangeHandler(controlUrlChange, controlUrlChangeToMain);
  searchView.addHandlerSearch(controlSearchResults);
  dropdownFilterView.addHandlerDropdownFilter(controlSearchResults);
  paginationView.addHandlerClickBtn(controlPagination);
};

init();

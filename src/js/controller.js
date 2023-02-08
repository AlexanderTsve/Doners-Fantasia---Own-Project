// import * as model from "./model.js";
import { state } from "./Model/state.js";
import { loadProductDetails } from "./Model/loadProductDetails.js";
import { loadProducts } from "./Model/loadProducts.js";
import { loadSearchResults } from "./Model/loadSearchResults.js";
import { getProductsPage } from "./Model/getProductsPage.js";
import { loadRestaurants } from "./Model/loadRestaurants.js";
import { sendFeedback } from "./Model/sendFeedback.js";
import { validateFeedbackName } from "./Model/validateFeedbackName.js";
import { validateFeedbackEmail } from "./Model/validateFeedbackEmail.js";
import { validateFeedbackPhone } from "./Model/validateFeedbackPhone.js";
import { validateFeedbackFieldInput } from "./Model/validateFeedbackFieldInput.js";
import { validateRegistrationEmail } from "./Model/validateRegistrationEmail.js";
import { validateRegistrationPhone } from "./Model/validateRegistrationPhone.js";
import { validateRegistrationPassword } from "./Model/validateRegistrationPassword.js";
import { validateRegistrationConfirmPassword } from "./Model/validateRegistrationConfirmPassword.js";
import { validateRegistrationAddress } from "./Model/validateRegistrationAddress.js";
import { validateRegistrationForm } from "./Model/validateRegistrationForm.js";
import { submitRegistrationForm } from "./Model/submitRegistrationForm.js";
import { clearRegistrationState } from "./Model/clearRegistrationState.js";
import { validateLoginForm } from "./Model/validateLoginForm.js";
import { submitLoginForm } from "./Model/submitLoginForm.js";
import { clearLoginFormState } from "./Model/clearLoginFormState.js";
import { clearLoginState } from "./Model/clearLoginState.js";
import { validateAddToCartInput } from "./Model/validateAddToCartInput.js";
import { fillCart } from "./Model/fillCart.js";
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
import restaurantsView from "./Views/restaurantsView.js";
import feedbackPageView from "./Views/feedbackPageView.js";
import registrationView from "./Views/registrationView.js";
import loginView from "./Views/loginView.js";
import logoutView from "./Views/logoutView.js";
import navigationView from "./Views/navigationView.js";
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
// const restaurants = [
//   {
//     name: "Sofia Center",
//     address: "bul. Aleksandar Stamboliyski 41",
//     geoLocation: { lat: 42.69729077097609, lon: 23.317056955920172 },
//     workingHours: "10.00 - 21.30",
//     workDays: [1, 2, 3, 4, 5, 6],
//     phone: "0888 88 88 88",
//   },
//   {
//     name: "Sofia Lyulin",
//     address: "ul. Pancho Vladigerov 21",
//     geoLocation: { lat: 42.713264924349055, lon: 23.24888154242746 },
//     workingHours: "10.00 - 21.30",
//     workDays: [1, 2, 3, 4, 5, 6],
//     phone: "0887 88 88 88",
//   },
//   {
//     name: "Sofia Mladost",
//     address: "bul. Aleksandar Malinov 78",
//     geoLocation: { lat: 42.63632565792078, lon: 23.36977386941168 },
//     workingHours: "10.00 - 21.30",
//     workDays: [1, 2, 3, 4, 5, 6],
//     phone: "0887 86 86 86",
//   },
//   {
//     name: "Sofia Pavlovo",
//     address: "ul. Alexander Pushkin 38",
//     geoLocation: { lat: 42.66163252401128, lon: 23.264926969504085 },
//     workingHours: "10.00 - 21.30",
//     workDays: [1, 2, 3, 4, 5, 6],
//     phone: "0887 83 83 83",
//   },
//   {
//     name: "Plovdiv Trakia",
//     address: "ul. Georgi Danchov 16",
//     geoLocation: { lat: 42.13878058136747, lon: 24.787433525222482 },
//     workingHours: "10.00 - 21.30",
//     workDays: [1, 2, 3, 4, 5, 6],
//     phone: "0887 84 84 84",
//   },
//   {
//     name: "Plovdiv Center",
//     address: "ul. Ivan Andonov 5",
//     geoLocation: { lat: 42.141660340827904, lon: 24.739933484743627 },
//     workingHours: "10.00 - 21.30",
//     workDays: [1, 2, 3, 4, 5, 6],
//     phone: "0887 85 85 85",
//   },
//   {
//     name: "Burgas Central Park",
//     address: "ul. Dame Gruev 8",
//     geoLocation: { lat: 42.51408531283424, lon: 27.4501782559161 },
//     workingHours: "10.00 - 21.30",
//     workDays: [1, 2, 3, 4, 5, 6],
//     phone: "0887 82 82 82",
//   },
//   {
//     name: "Varna Center",
//     address: "ul. General Kolev 3",
//     geoLocation: { lat: 43.20793873871141, lon: 27.910629969424402 },
//     workingHours: "10.00 - 21.30",
//     workDays: [1, 2, 3, 4, 5, 6],
//     phone: "0887 81 81 81",
//   },
//   {
//     name: "Varna Planet Mall",
//     address: "bul. Slivnitsa 185",
//     geoLocation: { lat: 43.22703005778861, lon: 27.875800015313523 },
//     workingHours: "10.00 - 21.30",
//     workDays: [1, 2, 3, 4, 5, 6],
//     phone: "0887 81 81 81",
//   },
//   {
//     name: "Varna Levski",
//     address: "ul. Dimitar Ikonomov 36",
//     geoLocation: { lat: 43.22060153604811, lon: 27.936078298260362 },
//     workingHours: "10.00 - 21.30",
//     workDays: [1, 2, 3, 4, 5, 6],
//     phone: "0887 80 80 80",
//   },
// ];
// const sendRestaurants = async () => {
//   const sendData = await fetch(
//     "https://react-http-requests-81638-default-rtdb.europe-west1.firebasedatabase.app/doners-restaurants.json",
//     {
//       method: "POST",
//       body: JSON.stringify(restaurants),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   await sendData();
// };
// sendRestaurants();

// ---------------
const controlAddingItemsToCart = (obj) => {
  const validationResult = validateAddToCartInput(obj);
  if (!validationResult) {
    return;
  }
  fillCart(obj);
  productsView.renderCartTooltip(state.cart);
};
const clearDropdownAndSearchField = () => {
  dropdownFilterView.clearValue();
  searchView.clearSearchValue();
};
const controlProductDetails = async (productId) => {
  try {
    productDetailsView.renderSpinner();
    await loadProductDetails(productId);
    if (!state.productDetails) {
      throw new Error("There is no existing product with such ID!");
    }
    productDetailsView.render(state.productDetails);
  } catch (err) {
    productDetailsView.renderError(err.message);
  }
};
const controlProducts = async () => {
  try {
    productsView.renderSpinner();
    await loadProducts();
    if (!state.products.every(Boolean) || state.products.length === 0) {
      throw new Error("One or more of the products do not exist!");
    }
    productsView.render(getProductsPage());
    paginationView.render(state);
    productsView.addToCartBtnHandler(controlAddingItemsToCart);
  } catch (err) {
    productsView.renderError(err.message);
  }
};
const controlRestaurants = async () => {
  try {
    restaurantsView.renderSpinner();
    await loadRestaurants();
    if (!state.restaurants.every(Boolean) || state.restaurants.length === 0) {
      throw new Error("One or more of the restaurants do not exist!");
    }
    restaurantsView.render(state.restaurants);
    restaurantsView.generateMap(state.restaurants);
  } catch (err) {
    restaurantsView.renderError(err.message);
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
    if (pathname === "/restaurants-page") {
      controlRestaurants();
    }
  }
  if (pathname.includes("details-page")) {
    const detailsPage = document.getElementById("details-page");
    detailsPage.classList.remove("hidden");
    controlProductDetails(pathname.replace("/details-page/", ""));
  }
};
const controlSearchResults = async () => {
  try {
    const query = searchView.getQuery();
    const dropdownValue = dropdownFilterView.getDropdownValue();
    productsView.renderSpinner();
    await loadSearchResults(query, dropdownValue);
    if (!state.products.every(Boolean) || state.products.length === 0) {
      throw new Error(
        `There is no existing product with ${query} in its name!`
      );
    }
    productsView.render(getProductsPage());
    paginationView.render(state);
    productsView.addToCartBtnHandler(controlAddingItemsToCart);
  } catch (err) {
    productsView.renderError(err.message);
  }
};
const controlPagination = function (goToPage) {
  productsView.render(getProductsPage(goToPage));
  paginationView.render(state);
  productsView.addToCartBtnHandler(controlAddingItemsToCart);
};
const controlChangePathname = (pathname) => {
  window.location.pathname = pathname;
};
const validationFeedbackController = (validationFn, classEnd) => {
  try {
    feedbackPageView.getFeedbackFormInputsContent(validationFn);
    feedbackPageView.clearError(classEnd);
  } catch (err) {
    feedbackPageView.renderError(err.message, classEnd);
  }
};
const controlFeedbackFormValidation = async () => {
  validationFeedbackController(validateFeedbackName, "name");
  validationFeedbackController(validateFeedbackEmail, "email");
  validationFeedbackController(validateFeedbackPhone, "phone");
  validationFeedbackController(validateFeedbackFieldInput, "text");
  if (
    state.feedbackFormData.emailContentIsOk &&
    state.feedbackFormData.nameContentIsOk &&
    state.feedbackFormData.feedbackContentIsOk &&
    state.feedbackFormData.phoneContentIsOk
  ) {
    feedbackPageView.clearInputs();
    const response = await sendFeedback();
    feedbackPageView.showMessageModal(response, "feedback-page");
  }
};
const controlFeedbackModalHiding = () => {
  feedbackPageView.hideMessageModal();
};
const controlRegisterModalShowing = () => {
  registrationView.showMainModal("registration");
};
const controlRegisterModalHiding = () => {
  registrationView.hideMainModal("registration");
  registrationView.clearInputs();
  clearRegistrationState();
  registrationView.clearParas();
};
const controlRegisterErrorParaEmail = () => {
  registrationView.getRegistrationFormInputs(validateRegistrationEmail);
  state.registrationFormData.emailContentIsOk ||
  !state.registrationFormData.emailContent
    ? registrationView.hidePara("email")
    : registrationView.showPara("email");
  registrationView.disabledHandler(validateRegistrationForm());
};
const controlRegisterErrorParaPhone = () => {
  registrationView.getRegistrationFormInputs(validateRegistrationPhone);
  state.registrationFormData.phoneContentIsOk ||
  !state.registrationFormData.phoneContent
    ? registrationView.hidePara("phone")
    : registrationView.showPara("phone");
  registrationView.disabledHandler(validateRegistrationForm());
};
const controlRegisterErrorParaPassword = () => {
  registrationView.getRegistrationFormInputs(validateRegistrationPassword);
  state.registrationFormData.passwordContentIsOk ||
  !state.registrationFormData.passwordContent
    ? registrationView.hidePara("password")
    : registrationView.showPara("password");
  registrationView.disabledHandler(validateRegistrationForm());
};
const controlRegisterErrorParaConfirmPassword = () => {
  registrationView.getRegistrationFormInputs(
    validateRegistrationConfirmPassword
  );
  state.registrationFormData.confirmPasswordContentIsOk ||
  (!state.registrationFormData.passwordContent &&
    !state.registrationFormData.confirmPasswordContent)
    ? registrationView.hidePara("password_confirm")
    : registrationView.showPara("password_confirm");
  registrationView.disabledHandler(validateRegistrationForm());
};
const controlRegisterErrorParaAddress = () => {
  registrationView.getRegistrationFormInputs(validateRegistrationAddress);
  state.registrationFormData.addressContentIsOk ||
  !state.registrationFormData.addressContent
    ? registrationView.hidePara("address")
    : registrationView.showPara("address");
  registrationView.disabledHandler(validateRegistrationForm());
};
const controlRegistrationFormSubmission = async () => {
  const response = await submitRegistrationForm();
  registrationView.hideMainModal("registration");
  registrationView.clearInputs();
  registrationView.showMessageModal(response, "modal_reg");
  clearRegistrationState();
  registrationView.clearParas();
};
const controlClickLoginParaRegForm = () => {
  registrationView.hideMainModal("registration");
  registrationView.clearInputs();
  loginView.showMainModal("login");
  clearRegistrationState();
  registrationView.clearParas();
};
const controlShowLoginModal = () => {
  loginView.showMainModal("login");
};
const controlHideLoginModal = () => {
  loginView.hideMainModal("login");
  loginView.clearInputs();
  clearLoginFormState();
};
const controlClickRegistrationParaLoginForm = () => {
  loginView.hideMainModal("login");
  loginView.clearInputs();
  registrationView.showMainModal("registration");
  clearLoginFormState();
};
const controlLoginParaError = () => {
  loginView.getLoginFormInputs(validateLoginForm);
  if (!state.loginFormDataIsOk) {
    loginView.showLoginErrorPara();
    return;
  }
  loginView.hideLoginErrorPara();
};
const controlLogoutBtn = () => {
  clearLoginState();
  navigationView.toggleHideShowNavigationBtn(state.isLogged);
  loginView.changeWelcomePara(state.isLogged);
};
const controlLoginSubmission = async () => {
  try {
    if (!state.loginFormDataIsOk) {
      return;
    }
    await submitLoginForm();
    navigationView.toggleHideShowNavigationBtn(state.isLogged);
    loginView.changeWelcomePara(state.isLogged, state.loggedUser.email);
  } catch (err) {
    loginView.showMessageModal(err.message, "modal_log_error");
  } finally {
    loginView.hideMainModal("login");
    loginView.clearInputs();
    clearLoginFormState();
    loginView.showLoginErrorPara();
  }
};
const init = () => {
  urlView.addUrlChangeHandler(controlUrlChange);
  urlView.addUrlChangeHandlerToMain(() => {
    controlChangePathname("/menu-page");
  });
  urlView.addUrlChangeHandlerToRestaurants(() => {
    controlChangePathname("/restaurants-page");
  });
  urlView.addUrlChangeHandlerToFeedback(() => {
    controlChangePathname("/feedback-page");
  });
  searchView.addHandlerSearch(controlSearchResults);
  dropdownFilterView.addHandlerDropdownFilter(controlSearchResults);
  paginationView.addHandlerClickBtn(controlPagination);
  feedbackPageView.addSubmitFormHandler(controlFeedbackFormValidation);
  feedbackPageView.addHideMessageModalHandler(controlFeedbackModalHiding);
  registrationView.addShowMainModalHandler(
    controlRegisterModalShowing,
    "register"
  );
  registrationView.addHideMainModalHandler(
    controlRegisterModalHiding,
    "registration"
  );
  registrationView.addInputFieldHandler(
    controlRegisterErrorParaEmail,
    "registration_email_input"
  );
  registrationView.addInputFieldHandler(
    controlRegisterErrorParaPassword,
    "registration_password_input"
  );
  registrationView.addInputFieldHandler(
    controlRegisterErrorParaConfirmPassword,
    "registration_password_confirm"
  );
  registrationView.addInputFieldHandler(
    controlRegisterErrorParaConfirmPassword,
    "registration_password_input"
  );
  registrationView.addInputFieldHandler(
    controlRegisterErrorParaPhone,
    "registration_phone_input"
  );
  registrationView.addInputFieldHandler(
    controlRegisterErrorParaAddress,
    "registration_address_input"
  );
  registrationView.addSignUpBtnHandler(controlRegistrationFormSubmission);
  registrationView.addParaHandler(controlClickLoginParaRegForm, "login_para");
  loginView.addShowMainModalHandler(controlShowLoginModal, "login");
  loginView.addHideMainModalHandler(controlHideLoginModal, "login");
  loginView.addParaHandler(
    controlClickRegistrationParaLoginForm,
    "register_paragraph"
  );
  loginView.addInputFieldsHandler(controlLoginParaError);
  loginView.addLoginBtnHandler(controlLoginSubmission);
  logoutView.addLogoutHandler(controlLogoutBtn);
  navigationView.toggleHideShowNavigationBtn(state.isLogged);
};
init();

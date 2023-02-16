export const removeProductFromCart = (name) => {
  let cart = localStorage.getItem("doner-cart");
  if (!cart || cart.length === 0) {
    return;
  }
  cart = JSON.parse(localStorage.getItem("doner-cart"));
  const itemIndex = cart.findIndex((item) => item.name === name);
  cart.splice(itemIndex, 1);
  localStorage.setItem("doner-cart", JSON.stringify(cart));
};

export const getChangedCart = () => {
  const cart = JSON.parse(localStorage.getItem("doner-cart"));
  if (!cart) {
    return;
  }
  return cart;
};

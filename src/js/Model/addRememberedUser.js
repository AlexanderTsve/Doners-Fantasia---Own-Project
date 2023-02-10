export const addRememberedUser = (obj) => {
  if (!obj.checked) {
    return;
  }
  localStorage.setItem("rememberUser", JSON.stringify(obj.checked));
};

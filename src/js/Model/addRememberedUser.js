export const addRememberedUser = (obj, loggedUser) => {
  if (!obj.checked) {
    return;
  }
  localStorage.setItem("rememberUser", JSON.stringify(loggedUser));
};

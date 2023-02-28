export const addRememberedUser = (obj, loggedUser) => {
  if (!obj.checked || Object.values(loggedUser).length === 0) {
    return;
  }
  localStorage.setItem("rememberUser", JSON.stringify(loggedUser));
};

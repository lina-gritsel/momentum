const name = document.querySelector(".name");

const setLocalStorage=() => {
  localStorage.setItem("name", name.value);
}
window.addEventListener("beforeunload", setLocalStorage);
const getLocalStorage=() => {
  if (localStorage.getItem("name")) {
    name.value = localStorage.getItem("name");
  }
}
window.addEventListener("load", getLocalStorage);

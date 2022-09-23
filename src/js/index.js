import getSearchData from "./getSearchData.js";
import searchObject from "./searchObject.js";
import getPrefix from "./prefix.js";

const select = document.querySelector(".search__select");
const button = document.querySelector(".search__button");

button.addEventListener("click", () => {
  const data = getSearchData(
    searchObject[select.options[select.selectedIndex].value]
  );
});

console.log(getPrefix("abcabd"));

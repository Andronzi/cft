import getColumnInnerContent from "./getSearchData.js";
import searchObject from "./searchObject.js";
import defaultTableData from "./defaultTableData.js";
import { mutateToDefault } from "./helpers/data.helper.js";
import illuminate from "./illuminate.js";

const select = document.querySelector(".search__select");
const input = document.querySelector(".search__input");
const button = document.querySelector(".search__button");

button.addEventListener("click", () => {
  const data = getColumnInnerContent(
    searchObject[select.options[select.selectedIndex].value]
  );

  if (defaultTableData.prevHeader) {
    const defaultColumnValues = defaultTableData[defaultTableData.prevHeader];
    mutateToDefault(defaultColumnValues);
  }

  illuminate(
    data,
    input.value,
    searchObject[select.options[select.selectedIndex].value]
  );
});

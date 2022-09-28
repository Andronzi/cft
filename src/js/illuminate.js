import defaultTableData from "./defaultTableData.js";
import getPartOfString from "./helpers/string.helper.js";
import { illuminateEndOfTag, illuminateStartOfTag } from "./constants.js";
import search from "./search.js";

const illuminate = (data, value, tableIndex) => {
  data.forEach((element) => {
    const indexes = search(
      element.innerHTML.toLowerCase(),
      value.toLowerCase()
    );

    const elementInnerHTML = element.innerHTML;
    const length = value.length;
    let currentInnerHTML = "";
    let prevIndex = 0;

    for (let i = 0; i < indexes.length; ++i) {
      currentInnerHTML +=
        getPartOfString(elementInnerHTML, prevIndex, indexes[i] - prevIndex) +
        illuminateStartOfTag +
        getPartOfString(elementInnerHTML, indexes[i], length) +
        illuminateEndOfTag;

      prevIndex = indexes[i] + length;
    }

    if (indexes.length) {
      currentInnerHTML += getPartOfString(
        elementInnerHTML,
        prevIndex,
        elementInnerHTML.length - prevIndex
      );

      element.innerHTML = currentInnerHTML;
    }

    defaultTableData.prevHeader = tableIndex;
  });
};

export default illuminate;

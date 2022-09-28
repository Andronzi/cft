import searchObject from "./searchObject.js";
import getColumnInnerContent from "./getSearchData.js";

const defaultTableData = {
  prevHeader: null,
};

Object.values(searchObject).forEach((element) => {
  const columnContent = getColumnInnerContent(element);
  defaultTableData[element] = [
    columnContent,
    columnContent.map((element) => element.innerHTML),
  ];
});

export default defaultTableData;

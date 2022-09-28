import {
  targetDataByIndex,
  targetDataByClassName,
} from "./helpers/data.helper.js";

const getColumnInnerContent = (contentIndex) => {
  const columnList = document.querySelectorAll(".table__content");
  const columnListChildren = [...columnList].map((value) => value.children);
  const columnContent = columnListChildren.map((value) =>
    targetDataByIndex(value, contentIndex).pop()
  );

  return columnContent.map((element) =>
    targetDataByClassName(element.childNodes, "table__text").pop()
  );
};

export default getColumnInnerContent;

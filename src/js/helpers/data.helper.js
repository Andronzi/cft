const targetDataByIndex = (targetArray, targetIndex) => {
  return [...targetArray].filter((_, index) => index === targetIndex);
};

const targetDataByClassName = (targetArray, targetClassName) => {
  return [...targetArray].filter(
    (element) => element.className === targetClassName
  );
};

// mutation innerHTML of nodes
const mutateToDefault = (array) => {
  for (let i = 0; i < array[0].length; ++i) {
    array[0][i].innerHTML = array[1][i];
  }
};

export { targetDataByIndex, targetDataByClassName, mutateToDefault };

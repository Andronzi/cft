function getPrefix(string) {
  const prefix = [];
  string.split("").forEach((_, index) => {
    let value = 0;

    for (let j = 0; j < index; ++j) {
      let isEqual = true;
      let tempValue = 0;

      for (let k = 0; k <= j; ++k) {
        if (string[k] !== string[index - j + k]) {
          isEqual = false;
          break;
        } else {
          tempValue++;
        }
      }

      if (isEqual) value += tempValue;
    }

    prefix.push(value);
  });

  return prefix;
}

export default getPrefix;

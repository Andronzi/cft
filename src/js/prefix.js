function getPrefix(string) {
  prefix = [];
  for (let i = 0; i < string.length; ++i) {
    let value = 0;

    for (let j = 0; j < i; ++j) {
      for (let k = 0; k < j; ++k) {
        if (string[j] === string[string.length - k]) {
          value++;
        }
      }
    }

    prefix.push(value);
  }
}

export default getPrefix;

import getPrefix from "./prefix.js";

function search(string, match) {
  const prefix = getPrefix(match);
  const indexes = [];
  let j = 0;
  for (let i = 0; i <= string.length; ++i) {
    if (match[j] !== string[i]) {
      if (j != 0) i = i - prefix[j - 1] - 1;
      j = 0;
    } else {
      ++j;

      if (j == match.length) {
        j = 0;
        indexes.push(i - (match.length - 1));
      }
    }
  }

  return indexes;
}

export default search;

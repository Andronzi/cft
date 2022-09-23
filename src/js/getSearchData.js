function getSearchData(contentIndex) {
  const searchData = [];
  const contentsList = document.querySelectorAll(".table__content");

  for (let i = 0; i < contentsList.length; ++i) {
    const content = contentsList[i].children;

    for (let j = 0; j < content.length; ++j) {
      if (j == contentIndex) {
        searchData.push(content[j].innerText.trim());
      }
    }
  }

  return searchData;
}

export default getSearchData;

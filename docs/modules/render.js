const render = {
  renderOverview: function(cocktailsOverview) {
    const overview = document.getElementById("overviewSection");
    overview.innerHTML = "";
    cocktailsOverview.forEach(cocktailsOverview => {
      const html = '<article id="searchResults"><a href=#drink/:' +
        cocktailsOverview.idDrink +
        ' id="' +
        cocktailsOverview.idDrink +
        '">' +
        cocktailsOverview.strDrink +
        '</a><img src="' +
        cocktailsOverview.strDrinkThumb +
        '"></article>';
      overview.insertAdjacentHTML("beforeend", html);
    })
  },

  renderDetail: function(cocktailDetail) {
    const detail = document.getElementById("detail");
    const data = cocktailDetail;
    detail.innerHTML = "";
    data.forEach(data => {
      const html = '<article id="searchResults"><a href=#drink/:' +
        data.idDrink +
        ' id="' +
        data.idDrink +
        '">' +
        data.strDrink +
        '</a><img src="' +
        data.strDrinkThumb +
        '"></article>';
      detail.insertAdjacentHTML("beforeend", html);
    })
  }
}

export default render;
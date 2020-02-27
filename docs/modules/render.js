const render = {
  overview: function(cocktailsOverview) {
    const overview = document.getElementById("cocktails");
    overview.innerHTML = "";
    cocktailsOverview.forEach(cocktailsOverview => {
      const html = '<article id="searchResults" data-route="overview"><a href=#drink/:' +
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

  detail: function(cocktailDetail) {
    const detail = document.getElementById("cocktailDetail");
    const data = cocktailDetail;
    console.log(cocktailDetail)
    detail.innerHTML = "";
    const html = '<article id="detailResults" data-route="detail"><a href=#drink/:' +
      data.idDrink +
      ' id="' +
      data.idDrink +
      '">' +
      data.strDrink +
      '</a><img src="' +
      data.strDrinkThumb +
      '"></article>';
    detail.insertAdjacentHTML("beforeend", html);
  }
}

export default render;
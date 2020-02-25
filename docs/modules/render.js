const render = {
  renderOverview: function(cocktailsOverview) {
    const overview = document.getElementById("overview");
    const data = cocktailsOverview.drinks;
    overview.innerHTML = "";
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
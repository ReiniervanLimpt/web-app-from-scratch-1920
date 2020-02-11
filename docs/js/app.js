import handler from '../modules/router.js';

(function() {
  'use strict'

  const app = {
    init: function() {
      handler()
    }
  }
  app.init()
})()

const findCocktail = document.querySelector('button');
findCocktail.addEventListener('click', requestCocktails);


// Later opbreken in API module

function requestCocktails() {

  const url = "https://www.thecocktaildb.com/api/json/v1/"
  const userInput = document.getElementById("ingredient").value;
  const apiKey = "1";

  fetch(`${url}${apiKey}/filter.php?i=${userInput}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      renderOverview(myJson);
    });
}

function requestDetail() {
  console.log("link werkt")
}

// later opbreken in API module



// later opbreken in Render module

function renderOverview(cocktailsOverview) {
  const root = document.getElementById("overview");
  const data = cocktailsOverview.drinks;
  root.innerHTML = "";
  data.forEach(data => {
    root.insertAdjacentHTML("beforeend", '<article id="searchResults"><a href=#detail id="drinkDetail">' + data.strDrink + '</a><img src="' + data.strDrinkThumb + '"></article>');
  })
}

// later opbreken in Render module

export default requestDetail;
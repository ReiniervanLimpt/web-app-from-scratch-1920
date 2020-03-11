import data from '../modules/data.js'
import render from '../modules/render.js'

const api = {
  fetchCocktails: function() {

    const url = "https://www.thecocktaildb.com/api/json/v1/";
    const userInput = document.getElementById("ingredient").value;
    const apiKey = "1";
    console.log(userInput)

    fetch(`${url}${apiKey}/filter.php?i=${userInput}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        data.storeCocktails(myJson)
      })
  },

  fetchDetail: function(id) {

    const url = "https://www.thecocktaildb.com/api/json/v1/";
    const userInput = id.substr(1);
    const apiKey = "1";

    fetch(`${url}${apiKey}/lookup.php?i=${userInput}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        data.storeDetail(myJson.drinks[0])
      });
  }
}

export default api;
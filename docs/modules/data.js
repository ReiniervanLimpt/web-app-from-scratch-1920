import api from '../modules/api.js';
import render from '../modules/render.js';

const data = {

  getCocktails: function() {
    const userInput = document.getElementById("ingredient").value;
    if (localStorage.getItem("'" + userInput + "'") === null) {
      console.log("doesnt exist in local storage")
      api.fetchCocktails()
    } else {
      console.log("overview exists in local storage")
    }
  },

  getDetail: function(id) {
    if (localStorage.getItem("'" + id.substr(1) + "'") === null) {
      console.log("doesnt exist in local storage")
      api.fetchDetail(id)
    } else {
      console.log("detail exists in local storage")
    }
  },


  storeCocktails: function(myJson) {
    const userInput = document.getElementById("ingredient").value;
    const requestedCocktails = myJson.drinks;
    localStorage.setItem("'" + userInput + "'", JSON.stringify(myJson));
  },


  storeDetail: function(data) {
    console.log(data)
    localStorage.setItem(`'${data.idDrink}'`, JSON.stringify(data));
  },


  cleanUpDetail: function(rawData) {
    return rawData.drinks[0]
  }

}

export default data;
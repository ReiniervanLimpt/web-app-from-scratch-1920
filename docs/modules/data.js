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
      const retrievedData = JSON.parse(localStorage.getItem("'" + userInput + "'"))
      data.filterOverview(retrievedData);
    }
  },

  getDetail: function(id) {
    if (localStorage.getItem("'" + id.substr(1) + "'") === null) {
      console.log("doesnt exist in local storage")
      api.fetchDetail(id)
    } else {
      console.log("detail exists in local storage")
      const retrievedData = JSON.parse(localStorage.getItem("'" + id.substr(1) + "'"))
      console.log(retrievedData)
      render.detail(retrievedData)
    }
  },

  // made by Kris
  storeCocktails: function(myJson) {
    const userInput = document.getElementById("ingredient").value;
    const requestedCocktails = myJson.drinks;

    const promises = requestedCocktails.map(cocktail => {
      const correctedId = cocktail.idDrink

      return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${correctedId}`)
        .then(response => response.json())
        .then(myData => myData.drinks[0])
    })

    Promise.all(promises).then(myData => {
      localStorage.setItem("'" + userInput + "'", JSON.stringify(myData));
      data.filterOverview(myData);
    })
  },
  // made by Kris

  filterOverview: function(data) {
    const userInput = document.getElementById("ingredient").value;
    const radioInput = document.getElementsByName("drink");
    const unfilteredCocktails = data;
    const checkedInput = radioInput.forEach((checkbox, i) => {
      if (checkbox.checked == true) {
        console.log(checkbox.value);
        console.log(unfilteredCocktails)
        const filteredCocktails = unfilteredCocktails.filter(function(cocktails) {
          return cocktails.strIngredient1 == checkbox.value ||
            cocktails.strIngredient2 == checkbox.value ||
            cocktails.strIngredient3 == checkbox.value ||
            cocktails.strIngredient4 == checkbox.value ||
            cocktails.strIngredient5 == checkbox.value ||
            cocktails.strIngredient6 == checkbox.value ||
            cocktails.strIngredient7 == checkbox.value ||
            cocktails.strIngredient8 == checkbox.value;
        });

        if (filteredCocktails.length == 0) {
          alert(`geen cocktails gevonden met ${userInput} en geselecteerde drank`)
        } else {
          render.overview(filteredCocktails)
        }
      }
    });
  },


  storeDetail: function(data) {
    localStorage.setItem(`'${data.idDrink}'`, JSON.stringify(data));
    render.detail(data)
  }
}

export default data;
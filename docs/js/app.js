//import handler from '../modules/router.js';

//handler()

function showIngredients() {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.textContent}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      const data = myJson.drinks
      console.log(data)
      document.getElementById("description").innerHTML = data[0].strInstructions;
    });
}

function searchByInput() {
  console.log("okpfagawg")

  var userInput = document.getElementById("ingredient").value;
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${userInput}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      const root = document.getElementById("test");
      const data = myJson.drinks
      root.innerHTML = "";
      console.log(data)
      data.forEach(data => {
        root.insertAdjacentHTML("afterbegin", '<article id="searchResults"><h2 id="drinkDetail">' + data.strDrink + '</h2><img src="' + data.strDrinkThumb + '"></article>');
        let drinkDetail = document.getElementById("drinkDetail");
        drinkDetail.addEventListener("click", showIngredients)
      })
    });
}

// .then((resultData) => {
//  document.getElementById("test").innerHTML = myJson.drinks[Math.floor(Math.random() * 10)].strDrink;
//});
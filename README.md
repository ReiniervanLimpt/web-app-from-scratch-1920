# Web App From Scratch @cmda-minor-web 1819


### My cocktail webapp!! :cocktail:

![cocktails](https://user-images.githubusercontent.com/36195440/75471052-f001c800-5991-11ea-9e83-7a8023ae2206.png)

used database: 🌐 https://www.thecocktaildb.com/ (no rate limit!!!)

My webapp allows users to search for cocktails based on ingredient ie. lemon(shows the most results), orange, lime etc in combination with a selection of alcoholic drinks which serve as a filter through a big array of cocktails!

### :star: Installation:
Clone this repository:

1: `git clone https://github.com/ReiniervanLimpt/web-app-from-scratch-1920.git`

2: `Run a live server (i used the atom-live-server package extension for my atom editor)`

### Actor diagram:
![actor Diagram 2](https://user-images.githubusercontent.com/36195440/75466298-47039f00-598a-11ea-8dd1-7fbd452cbdbc.png)

### Interaction diagram:
![Interaction Diagram](https://user-images.githubusercontent.com/36195440/75466304-48cd6280-598a-11ea-9de7-0a932d576469.png)
<!-- Add a link to your live demo in Github Pages -->

### Modules and their main functionality

## app.js 
> Primary function: `init()`
 ```javascript
const app = {
    init: function() {
      handler()
    }
  }
  app.init()
```
 starts the routie module which checks what hash is requested

## router.js
> Primary function: `updatePage(route)`
 ```javascript
  function updatePage(route) {
    const sections = document.querySelectorAll('section')
    sections.forEach(section => {
      section.classList.remove('active')
    })
    const activeSection = document.querySelector(`[data-route="${route}"]`)
    console.log(activeSection)
    activeSection.classList.add('active')
  }
}
```
 hides and displays sections of the page based on the requested route
 
 ## data.js :star2: :star2: :star2: 
> Primary function: `storeCocktails(myJson)`
 ```javascript
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
```
The data fetched by the requested ingredient did not lend itself to being filtered, the data in the array only had a name and and ID, the API can retrieve more data on the cocktails by doing another api call based on their ID's! with some help of Kris we managed to request a new array of cocktails (which are all objects) by mapping through the original array's idDrink values. with way more properties which i use to filter by drink type. in `filterOverview(data)`

 ## render.js
 > Primary function: `overview() / detail()`
 ```javascript
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
  }
```
pushes HTML for each cocktail object into a section siaplying its thumbnail and title.

## api.js 
> Primary function: `fetchCocktails()`
 ```javascript
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
  }
```
 this function fetches the data from the api based on the users input.

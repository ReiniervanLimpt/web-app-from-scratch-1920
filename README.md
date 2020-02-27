# Web App From Scratch @cmda-minor-web 1819


### My cocktail webapp!! :cocktail:

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
> starts the routie module which checks what hash is requested

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
> hides and displays sections of the page based on the requested route

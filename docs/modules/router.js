import data from '../modules/data.js';
import render from '../modules/render.js'

function handler() {
  routie({
    '': function() {
      console.log("routing werkt")
    },
    'drink/:id': function(id) {
      updatePage("detail")
      render.loader()
      data.getDetail(id)
    },
    'overview': function() {
      updatePage("overview")
      render.loader()
      data.getCocktails()
    },
    '*': function() {
      console.log('404')
    }
  });

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

export default handler;
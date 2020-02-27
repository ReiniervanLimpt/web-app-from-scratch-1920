import data from '../modules/data.js';

function handler() {
  routie({
    '': function() {
      console.log("routing werkt")
    },
    'drink/:id': function(id) {
      data.getDetail(id)
      updatePage("detail")
    },
    'overview': function() {
      data.getCocktails()
      updatePage("overview")
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
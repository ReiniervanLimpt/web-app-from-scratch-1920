import data from '../modules/data.js';

function handler() {
  routie({
    '': function() {
      console.log("routing werkt")
    },
    'drink/:id': function(id) {
      data.getDetail(id)
    },
    'overview': function() {
      data.getCocktails()
    }
  });
}

export default handler;
import requestDetail from '../js/app.js';

function handler() {
  routie({
    '': function() {
      console.log("routing active")
    },
    'detail': function() {
      console.log("detail")
    },
    '/:id': function(id) {

    }
  });
}

export default handler;
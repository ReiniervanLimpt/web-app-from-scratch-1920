function handler() {
  routie({
    '': function() {
      console.log("nice")
    },
    'overview': function() {

    },
    '/:id': function(id) {

    }
  });
}

export default handler;
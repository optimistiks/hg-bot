var utils = require('../../utils');

module.exports = {

  match: function(segments) {

    var text = utils.getTextFromSegments(segments);
    var regexp = /даааааа/;


    return regexp.test(text);

  },


  getAnswer: function(segments) {

    return 'дааааааааааааааа, жизнь то она тяжелая'

  }
};

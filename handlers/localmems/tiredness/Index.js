var utils = require('../../utils');

module.exports = {

  match: function(segments) {

    var text = utils.getTextFromSegments(segments);
    var regexp = /do3balo/;


    return regexp.test(text);

  },


  getAnswer: function(segments) {

    return '+'
};

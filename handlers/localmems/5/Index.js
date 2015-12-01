var utils = require('../../utils');

module.exports = {

  match: function(segments) {

    var regexp = /^бот.*давай.*5$/;
    var text = utils.getTextFromSegments(segments);

    return regexp.test(text);

  },


  getAnswer: function(segments) {

    return '5';

  }
};

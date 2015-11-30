var utils = require('../../utils');

module.exports = {

  match: function(segments) {

    var text = utils.getTextFromSegments(segments);
    var regexp = /ауе.*всем.*честным./;


    return regexp.test(text);

  },


  getAnswer: function(segments) {

    return 'мяу'

  }
};

var utils = require('../../utils');

module.exports = {

  match: function(segments) {

    var text = utils.getTextFromSegments(segments);
    var regexp = /чего.*не.*спишь/;


    return regexp.test(text);

  },


  getAnswer: function(segments) {

    return 'бу)))))))'

  }
};

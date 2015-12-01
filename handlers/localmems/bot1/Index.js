var utils = require('../../utils');

module.exports = {

  match: function(segments) {

    var text = utils.getTextFromSegments(segments);
    var regexp = /и.*чего.*эта/;


    return regexp.test(text);

  },


  getAnswer: function(segments) {

    return 'аэаэа и чего это, херобора, хуирга какая-то'

  }
};

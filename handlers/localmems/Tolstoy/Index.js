var utils = require('../../utils');

module.exports = {

  match: function(segments) {

    var text = utils.getTextFromSegments(segments);
    var regexp = /я.*вот.*сегодня/;


    return regexp.test(text);

  },


  getAnswer: function(segments) {

    return 'ой, вот лучше бы Толстого почитал или живописью занялся'

  }
};

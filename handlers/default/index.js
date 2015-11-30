var utils = require('../../utils');

module.exports = {

  match: function(segments) {

    var text = utils.getTextFromSegments(segments);
    return utils.appealToBot(text);

  },


  getAnswer: function(segments) {

    return 'ты опять выходишь на связь?';

  }
};
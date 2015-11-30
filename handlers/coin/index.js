var utils = require('../../utils');

module.exports = {

  match: function(segments) {

    var suffix = 'кинь монетку';
    var text = utils.getTextFromSegments(segments);

    return utils.appealToBot(text) &&
           text.indexOf(suffix) !== -1;

  },


  getAnswer: function(segments) {

    return utils.throwCoin() ? 'орёл' : 'решка';

  }
};
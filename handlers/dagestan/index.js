var utils = require('../../utils');

module.exports = {

  match: function(segments) {

    var text = utils.getTextFromSegments(segments);
    var regexp = /хочу.*обратиться.*к.*дагестанцам.*пацанам/;


    return regexp.test(text);

  },


  getAnswer: function(segments) {

    return 'я сам из дагестана, алейкум ас салам'

  }
};
var utils = require('../../utils');

module.exports = {

  match: function(segments) {

    var text = utils.getTextFromSegments(segments);
    var regexp = /даа+/;


    return regexp.test(text);

  },


  getAnswer: function(segments) {

    var aaa = '';
    var rand = Math.floor(Math.random() * 10) + 1;

    for (var i = 0; i !== rand; ++i) {
      aaa += 'а';
    }

    return 'да' + aaa + ', жизнь то она тяжелая'

  }
};

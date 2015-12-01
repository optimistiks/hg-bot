var utils = require('../../utils');

module.exports = {

  match: function(segments) {

    var text = utils.getTextFromSegments(segments);
    var regexp = /пошёл.*нахуй/;


    return regexp.test(text);

  },


  getAnswer: function(segments) {

    return 'чтоб тебя разрезали на глазах у школьников!'

  }
};
